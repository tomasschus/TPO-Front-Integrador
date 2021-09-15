
/*var btn = document.getElementById("submitForm");

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
*/

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("/publicacion/publicaciones.json", function (text) {
    var data = this.data = JSON.parse(text);
    var contenedorPublicaciones = document.getElementById("contenedorPublicaciones");


    data.forEach(element => {
        contenedorPublicaciones.innerHTML = `
                    <div onClick="gotopub(${element.id})">
                        <img src="./img/${element.img}" alt="">
                        <h3> ${element.titulo}</h3>
                        <p>${element.descripcion}</p>
                    </div>`+ contenedorPublicaciones.innerHTML;
        
    });
});

function gotopub(numero){
    window.location.href  = ('/publicacion/publicacion.html?'+numero)
}
/*var publicacion = document.getElementById("goto");
publicacion.addEventListener("click", (e)=>{
    console.log("click goto")
    var link = '/publicacion/publicacion.html'+'?producto=camiseta&color=azul&talla=s'
    window.location.pathname = (link)
})*/