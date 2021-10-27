var email = document.getElementById("email");
var mensaje = document.getElementById("mensaje");
var btn = document.getElementById("submit");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value != "" && mensaje.value != "") {
    alert("Mensaje enviado, gracias!");
    console.log(mensaje.value + email.value);
    mensaje.value = "";
    email.value = "";
  }
  else{
    alert("Debes completar todos los campos");
  }
});

