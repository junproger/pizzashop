<?php

header('Content-Type: text/html; charset=utf-8');

/* connecting to local database */

$MYSQLI = mysqli_connect('sql303.byethost7.com', 'b7_28240312', 'DWBqhYfH0qSudzMJdwviTg', 'b7_28240312_end407');

		if ($MYSQLI == false){
    print('Error: No connect to MySQL!'. mysqli_connect_error());
    exit();
		}
			else {

/* getting data from database */

$RESULT = mysqli_query($MYSQLI, "SELECT * FROM CARDS");

/* storing result as array */

$DATA = array();
while($ROW = mysqli_fetch_assoc($RESULT)) {
			$DATA[] = $ROW;
			}
			
/* returning response in JSON format */

echo json_encode($DATA);

/* memory free */
$RESULT->close();
	}
	
/* connection close */
$MYSQLI->close();

?>