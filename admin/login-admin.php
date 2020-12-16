<?php
// if(isset($_POST['login-admin'])){
//   $usuario = $_POST['usuario'];
//   $passwprd = $_POST['password'];
//    die(json_encode($_POST));

if($_POST['tipo'] == 'login') {
  $usuario = $_POST['usuario'];
  $password = $_POST['password'];
  // die(json_encode($_POST));

  try {
    requeri_once('funciones/funciones.php');
    $stmt = $conn->prepare("")
  } catch (\Exception $e) {

  }

}


 ?>
