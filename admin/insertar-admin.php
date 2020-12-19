<?php
// echo "<pre>";
// echo  var_dump($_POST);
// echo "</pre>";
if(isset($_POST['agregar-admin'])){
  die json_encode($_POST);

  
    $usuario = $_POST['usuario'];
    $nombre = $_POST['nombre'];
    $password = $_POST['password'];

    $opciones = array(
      'cost' => 12
    );

    $password_hashed = password_hash($password, PASSWORD_BCRYPT, $opciones);
    // echo $password_hashed;
  }

  try {
    include_once 'funciones/funciones.php';
    $stmt = $conn->prepare("INSERT INTO admins (usuario, nombre, hash_pass) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $usuario, $nombre, $password_hashed);
    $stmt->execute();
    $stmt->close();
    $conn->close();
  } catch (\Exception $e) {
    echo "Error: " . $e->getMessage();
  }


?>
