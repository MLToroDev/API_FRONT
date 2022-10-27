

$(document).ready(() => {
cargarTabla();

   

});
function cargarTabla(){
    let t = $("tbody");
    t.empty();
    
    $.get("http://localhost:3000/api/producto", (rs) => {
        console.log(rs);
       
        rs.forEach(Producto => {
            t.append(`<tr>
            <td>${Producto.Codigo}</td>
            <td>${Producto.Nombre}</td>
            <td>${Producto.Cantidad}</td>
            <td>${Producto.ValorU}</td>
            <td>${Producto.PrecioV}</td>
            <td>${Producto.Cliente}</td>
            </tr>`);
        });
    })
}



$('#BtnRegistrar').click(() => {
console.log("el kkks");
     const Codigo = $('#codigo');
     const Nombre = $('#producto')
     const Cantidad = $('#cantidad');
    const ValorU = $('#valorU');
     const PrecioV = $('#precioV');
    const cliente = $('#proovedor');

    let p = {
        Codigo: Codigo.val(), Nombre: Nombre.val(), Cantidad: Cantidad.val(), ValorU: ValorU.val(),
         PrecioV: PrecioV.val(), Cliente: cliente.val()
     };
     console.log(p);

     $.post("http://localhost:3000/api/producto", p, (rs) => {
         console.log(rs);
         alert("registro success");
            cargarTabla();
   })


});




