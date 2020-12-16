<?php

   require_once('../includes/funciones/bd_conexion.php');
   require_once('../includes/funciones/funciones.php');
//
echo "<pre>";
  var_dump($conn->ping());
echo "</pre>";

// function obtener_template() {
//     $file = basename($_SERVER['PHP_SELF']);
//     $pagename = str_replace(".php","",$file);
//
//     return $pagename;
//   }

 ?>
