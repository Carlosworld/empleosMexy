<?php

  include_once 'funciones/funciones.php';

  // Leer los datos

  if($_POST['registro'] == 'actualizar'){

    $id_registro = $_POST['id_registro'];
    $usuario = $_POST['usario'];
    $nuevo_password = $_POST['$nuevo_password'];

    try{
      $opciones = array(
        'cost' => 12,
      );
      if(empty($_POST['nuevo_password']) && empty($_POST['repetidor_pasword']))

    }
  }

 ?>
