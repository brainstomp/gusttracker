<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'AWOSDBUser');
define('DB_PASSWORD', 'AWOSDBUserPassword');
define('DB_NAME', 'AWOSDB');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
     die("Connection failed: " . $mysqli->error);
}

//query to get data from the table
$query = sprintf("SELECT `wind.gust_speed` as gust_speed, timestamp_stored FROM awos_data where timestamp_stored > date_sub(now(), interval 31 minute)");

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
     $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);
