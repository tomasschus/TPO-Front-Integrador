
var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var btn = document.getElementById("submit");

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    alert("Mensaje enviado, gracias!")
    console.log(mensaje.value + email.value);
    mensaje.value="";
    email.value="";
})