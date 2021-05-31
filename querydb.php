<?php

header('Content-Type: text/html; charset=utf-8');

$MYSQLI = mysqli_connect('sql303.byethost7.com', 'b7_28240312', 'DWBqhYfH0qSudzMJdwviTg', 'b7_28240312_end407');


echo "Check MySQL connect. <br />";

if ($MYSQLI == false){
    print('Error: No connect to MySQL!'. mysqli_connect_error());
    exit();
}
else {
    print('MySQL was connected!');
}

$MYSQLI->close();
exit();
?>