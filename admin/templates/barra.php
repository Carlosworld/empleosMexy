<nav class="main-header navbar navbar-expand navbar-white navbar-light">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">

    <header class="main-header">
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <!-- <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a> -->

        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
              <li class="dropdown user user-menu">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <!-- <php
                  echo "<pre>";
                  var_dump($_SESSION);
                  echo "<pre>";
                  ?>   -->
                      <!-- ?php $usuario = $_SESSION['nombre']; ?> -->
                    <span class="hidden-xs">Admin</span>
                  </a>
                  <ul class="dropdown-menu">
                      <!-- User image -->
                      <li class="user-header">
                          <!-- <img src="img/user2-160x160.jpg" class="img-circle" alt="User Image"> -->

                          <p>
                         <!-- ?php echo $usuario?> -->
                          </p>
                      </li>
                      <!-- Menu Footer-->
                      <li class="user-footer">
                          <div class="pull-left">
                            <!-- <a href="editar-admin.php?id=?php echo $_SESSION['id']; ?>" class="btn btn-default btn-flat">Cambiar Clave</a> -->
                          </div>
                          <div class="pull-right">
                            <a href="login.php?cerrar_sesion=true" class="btn btn-default btn-flat">Cerrar Sesión</a>
                          </div>
                      </li>
                  </ul>
              </li>
          </ul>
        </div>
      </nav>
    </header>



  </ul>
</nav>
