<?php
define('EMPLEOSMEXY_HOST','localhost');
define('EMPLEOSMEXY_DB_USUARIO','root');
define('EMPLEOSMEXY_DB_PASSWORD','');
define('EMPLEOSMEXY_DB_DATABASE','empleosmexy');

$conn = new mysqli(EMPLEOSMEXY_HOST, EMPLEOSMEXY_DB_USUARIO, EMPLEOSMEXY_DB_PASSWORD, EMPLEOSMEXY_DB_DATABASE);

// echo "<pre>";
//   echo var_dump($conn->ping());
// echo "</pre>";

if($conn->connect_error) {
  echo $conn->connect_error;
}
 ?>
