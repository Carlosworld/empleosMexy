<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="../../index3.html" class="brand-link">
    <img src="assets/img/AdminLTELogo.png"
         alt="AdminLTE Logo"
         class="brand-image img-circle elevation-3"
         style="opacity: .8">
    <span class="brand-text font-weight-light"><b>Administrador </b>web</span>
  </a>
  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <!-- <div class="image">
        <img src="img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
      </div> -->
      <!-- <div class="info">
        <a href="#" class="d-block">CarlosWorld</a>
      </div> -->
      <!-- <php
                  echo "<pre>";
                  var_dump($_SESSION);
                  echo "<pre>";
                  ?>  -->

      <!-- SEARCH FORM -->
      <!-- <form class="form-inline ml-3">
        <div class="input-group input-group-sm">
          <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-navbar" type="submit">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form> -->
    </div>

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        <li class="nav-header">Menú de Administración</li>

        <!-- Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library -->


        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fa fa-user"></i>
            <p>
              Administradores
              <i class="fas fa-angle-left right"></i>
              <!-- <span class="badge badge-info right">6</span> -->
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="lista-admin.php" class="nav-link">
                <i class="nav-icon fa fa-list-ul"></i>
                <p> Ver todos</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="nuevo-admin.php" class="nav-link">
                <i class="nav-icon fa fa-plus-circle"></i>
                <p> Agregar</p>
              </a>
            </li>
          </ul>
        </li>

        <li class="nav-item has-treeview">
          <a href="#" class="nav-link">
            <i class="nav-icon fas fa-shopping-bag"></i>
            <p>
              Servicios
              <i class="fas fa-angle-left right"></i>
              <!-- <span class="badge badge-info right">6</span> -->
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="lista-admin.php" class="nav-link">
                <i class="nav-icon fa fa-list-ul"></i>
                <p> Ver todos</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="crear-admin.php" class="nav-link">
                <i class="nav-icon fa fa-plus-circle"></i>
                <p> Agregar</p>
              </a>
            </li>
          </ul>
        </li>



      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
