<?php

header('Content-Type: text/html; charset=utf-8');

$MYSQLI = mysqli_connect('sql303.byethost7.com', 'b7_28240312', 'DWBqhYfH0qSudzMJdwviTg', 'b7_28240312_end407');

		if ($MYSQLI == false){
    print('Error: No connect to MySQL!'. mysqli_connect_error());
    exit();
		}
			else {

$NAME = $_POST['NAME'];
$CITY = $_POST['CITY'];
$EMAIL = trim(mb_strtolower($_POST['EMAIL']));
$LOGIN = trim(mb_strtolower($_POST['LOGIN']));
$PASSWORD = trim($_POST['PASSWORD']);
$PASSWORD = password_hash("$PASSWORD", PASSWORD_DEFAULT);

$RESULT = $MYSQLI->query("SELECT*FROM `USERS` WHERE `EMAIL`='$EMAIL' AND `LOGIN`='$LOGIN'");

		if ($RESULT->num_rows !=0) {
		print('YET EXIST!');
		}
			else	{

$MYSQLI->query("INSERT INTO `USERS`(`NAME`, `CITY`, `EMAIL`, `LOGIN`, `PASSWORD`) VALUES ('$NAME', '$CITY', '$EMAIL', '$LOGIN', '$PASSWORD')");

		print('OK!');
		
		}
    /* Освобождаем память */
    $RESULT->close();
	}
/* Закрываем соединение */
$MYSQLI->close();
?>