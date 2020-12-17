$(document).ready(function(){
$('#guardar-registro').on('submit', function(e){
  e.preventDefault();

  var datos = $(this).serialize();

  $.ajax({
    type: $(this).attr('method'),
    data: datos,
    url: $(this).attr('action'),
    dataType: 'json',
    success: function(data){
      console.log(data);
    }
  })
})
})
