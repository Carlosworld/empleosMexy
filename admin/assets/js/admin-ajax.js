$(document).ready(function(){
  $('#guardar-registro').on('submit', function(e){
    e.preventDefault();

    var datos = $(this).serializeArray();

    $.ajax({
      type: $(this).attr('method'),
      data: datos,
      url: $(this).attr('action'),
      dataType: 'json',
      success: function(data) {
        console.log(data);
        var resultado = data;
        if(resultado.respuesta == 'exito') {
          Swal.fire({
            position: 'top-end',
            type: 'success',
            title: 'El administrador se creo correctamente',
            showConfirmButton: true,
          })
        } else if(resultado.respuesta == 'no_existe' ) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'hubo un error!',
            footer: '<b>Debes ingresar otro nombre de administrador</b>'
          })
        }else {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'hubo un error!',
            footer: '<b>debes cambiar la contraseña o el nombre de al adminai</b>'
          })
        }

      }
    })

  });


// Eliminar un registro

$('.borrar_registro').on('click', function(e){
  e.preventDefault();
  var id = $(this).attr('data-id');
  var tipo = $(this).attr('data-tipo');

  swal({
    title: 'Seguro(a)?',
    text: "Esta acción no se puede deshacer",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, borrar!',
    cancelButtonText: 'Cancelar'
  }).then(function(){
          $.ajax({
            type: 'post',
            data: {
              'id': id,
              'registro' : 'eliminar'
            },
            url: 'modelo-'+tipo+'.php',
            success: function(data){
              var resultado = JSON.parse(data);
              console.log(resultado);
              if (resultado.respuesta == 'exito') {
                swal(
                  'Eliminado!',
                  'Registro eliminado',
                  'success'
                )
                console.log(resultado);
                jQuery('[data-id="'+ resultado.id_eliminado +'"]').parents('tr').remove();
              }else {
                swal(
                  'error!',
                  'Registro eliminado',
                  'error'
                )
              }
            }
          });
        });
});



});


//Eliminar un administrador
