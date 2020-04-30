#! /bin/bash
#
#Set variables needed for this script
#
_now=$(date +%Y%m%d-%H%M%S)

#
#Get the data from the AWOS jSON feed and save it with a name that uses the current date and time
#
curl -s http://noc.krpj.skydivecsc.com:1780/current > "/home/brainstomp/csc_awos/data/$_now.json"

#
#Convert the data from jSON to CSV and move the jSON file to an archive
#
#
/home/brainstomp/csc_awos/bin/json2csv -k timestamp,wind.direction,wind.speed,wind.gust_speed -i /home/brainstomp/csc_awos/data/$_now.json -p -o /home/brainstomp/csc_awos/data/awos_data
mv /home/brainstomp/csc_awos/data/*.json /home/brainstomp/csc_awos/records/.

#
#Import the CSV data into MySQL and move the CSV file to an archive
#
cd /home/brainstomp/csc_awos/data/
mysqlimport --user=<AWOSDBUser> --password=<AWOSDBUserPassword> --local --fields-terminated-by=, --verbose --ignore-lines=1 csc_awos awos_data
mv /home/brainstomp/csc_awos/data/awos_data /home/brainstomp/csc_awos/records/$_now.csv
