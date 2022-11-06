
$(document).ready(() => {




});

$('#btnBuscar').click(() => {

    const Codigo = $('#id');
   
    $.get("http://localhost:3000/api/producto/"+Codigo.val(), (rs) => {
        console.log(rs);
        alert("registro success");
           cargarTabla();
  })
    



});
