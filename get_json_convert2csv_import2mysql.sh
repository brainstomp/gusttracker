#! /bin/bash
#
#Set variables needed for this script
#
_now=$(date +%Y%m%d-%H%M%S)

#
#Get the data from the AWOS jSON feed and save it with a name that uses the current date and time
#
curl -s <JSONURL> > "<HostingPath>/awos/data/$_now.json"

#
#Convert the data from jSON to CSV and move the jSON file to an archive
#
#
<HostingPath>/awos/bin/json2csv -k timestamp,wind.direction,wind.speed,wind.gust_speed -i <HostingPath>/awos/data/$_now.json -p -o <HostingPath>/awos/data/awos_data
mv <HostingPath>/awos/data/*.json <HostingPath>/awos/records/.

#
#Import the CSV data into MySQL and move the CSV file to an archive
#
cd <HostingPath>/awos/data/
mysqlimport --user=<AWOSDBUser> --password=<AWOSDBUserPassword> --local --fields-terminated-by=, --verbose --ignore-lines=1 awos awos_data
mv <HostingPath>/awos/data/awos_data <HostingPath>/awos/records/$_now.csv
