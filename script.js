
var btn = document.getElementById("submitForm");

btn.addEventListener("click", (e)=>{
    e.preventDefault(); 
    var email = document.getElementById("InputEmail").value;
    var mensaje = document.getElementById("InputTextArea").value;
    console.log(email + " " +mensaje )
    if (email!="" && mensaje!=""){
        window.alert("Gracias por enviar el mensaje");
    }
    else{
        window.alert("Complete los datos.");
    }
    document.getElementById("InputEmail").value = "";
    document.getElementById("InputTextArea").value= "";
})

