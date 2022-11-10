$(document).ready(console.log("ELKKS@NOLEOLLORO.XD QUEBENDICION"))

$("#BtnIngresar").click(() => {
    const usuario = $('#usuario');
    const contraseña = $('#contraseña')

$.get("http://localhost:3000/api/producto/login", (rs) => {

        rs.forEach(Usuari => {
            usa = Usuari.Usuarios;
            contra = Usuari.Contraseña;
        });
        
        if (usa == usuario.val() && contra == contraseña.val()) {
            Swal.fire({
                icon: 'success',
                title: 'Listo',
                text: 'El ingreso fue exitoso',
                confirmButtonColor: '#198754',
                iconColor: '#198754'
            })
            function accedio(){document.location = "/vista/entrada.html"}
            setTimeout(accedio, 2000)
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Acceso denegado!',
                text: 'El usuario y/o contraseña no son correctos',
                confirmButtonColor: '#198754',
                iconColor: '#198754'
            })
        }
    })
})
$("#BtnContraseña").click(() => {
    Swal.fire({
    icon: 'info',
    title: 'Cagaste',
    text: "a casa pa' no leo lloros",
    confirmButtonColor: '#198754',
    iconColor: '#198754'
})})