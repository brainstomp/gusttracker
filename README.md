# gusttracker
AWOS wind and gusts tracker for skydiving operations

This is what serves up https://lifeatterminalvelocity.com/csc_awos/linegraph.html the purpose of the page is to meet our SOP of not allowing a student to go up on a jump within 30 minutes of any winds that exceed our student limits. It has the added benefit of letting any jumper see what the winds have been doing over the last half hour before deciding to go or not go on a jump. Before I clobbered this up manifest had to keep an eye on our AWOS station output page and note the time and speed of winds and gusts and sometimes data was missed that would matter to me as an instructor wanting to get our students the best experience possible.


Disclaimer - Coding is *not* my forte. You want to talk systems hardware and networking I'm your huckleberry. The content of this is a butchered compilation I made to solve a problem I had. It lacks documentation and fines. I'm certain it can be better and I know well that going from JSON to CSV to MySQL is a kluge that would make Rube Goldberg cringe. 

File descriptions:

get_json_convert2csv_import2mysql.sh - script to pull a json source into a local path as a CSV with the date/time of the retrieval as the file name. I run this on a crontab on the server running the website hosting the gusts tracker.

data.php - a sample data query from MySQL using PHP that the page uses to pull the data needed to generate the graph.

app.js - javascript to turn the data into a graph.

linegraph.html - pulls it all together to show the graph with the winds and gusts data from the database.

jquery.min.js - javascript library I found that lets me do some of the datapulls I need to make. You can download the latest version at https://jquery.com/download/

chart.bundle.js - javascript library I found that lets me chart the data. You can download the latest version at https://github.com/chartjs/Chart.js/releases

csc_awos_db_schema - the schema of the database I use to store the data. 
