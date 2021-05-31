<?php

header('Content-Type: text/html; charset=utf-8');

$PIZZANAME = $_POST['PIZZANAME'];
$PIZZAQUANT = $_POST['PIZZAQUANT'];
$CLIENTPHONE = $_POST['CLIENTPHONE'];

echo "Ваш заказ: $PIZZANAME, $PIZZAQUANT шт. Сумма заказа XXXX руб. Менеджер скоро перезвонит Вам для уточнения заказа и адреса доставки.";

?>