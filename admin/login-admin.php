<?php
// if(isset($_POST['tipo'])){
//   $usuario = $_POST['usuario'];
//   $passwprd = $_POST['password'];
//    die(json_encode($_POST));
//
//    echo "<pre>";
//    var_dump($_POST['usuario']);
//    echo "<pre>";

if($_POST['tipo'] == 'login') {
  $usuario = $_POST['usuario'];
  $password = $_POST['password'];
   // die(json_encode($_POST));

  try {
    require_once('funciones/funciones.php');
    //
    // echo "<pre>";
    //   var_dump($conn->ping());
    // echo "</pre>";

    $stmt = $conn->prepare("SELECT id_administrador, usuario, nombre, password, nivel FROM administrador WHERE usuario = ?; ");
    $stmt->bind_param("s", $usuario);
         $stmt->execute();
         $stmt->bind_result($id, $nombre_usuario,  $password_usuario, $nivel);

         if($stmt->affected_rows) {
               $existe = $stmt->fetch();
               if($existe) {
                   if(password_verify($password, $password_usuario)){
                       session_start();
                       $_SESSION['usuario'] = $usuario;
                       $_SESSION['id'] = $id;
                       $_SESSION['nivel'] = $nivel;
                       $respuesta = array(
                           'resultado' => 'exito',
                           'usuario' => $usuario
                       );
                   } else {
                       $respuesta = array(
                           'resultado' => 'password_incorrecto'
                       );
                   }
               } else {
                   $respuesta = array(
                       'resultado' => 'no_existe'
                   );
               }
         } else {
           $respuesta = array(
               'resultado' => 'Usuario no Existe!',
               'resultado' => $stmt
           );
         }

         $stmt->close();
         $conn->close();
       } catch(Exception $e) {
          $respuesta = array(
              'resultado' => 'Error',
          );
       }
       die(json_encode($respuesta));
   }
?>
