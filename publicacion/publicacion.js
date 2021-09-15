const valores = window.location.search;
var idpub = (valores.split("?")[1]);
console.log("parametro: " + idpub)


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

window.onload = readTextFile("publicaciones.json", function (text) {
    var data = this.data = JSON.parse(text);
    var pub = document.getElementById("publicacion");


    data.forEach(element => {
        if(element.id==idpub){
            console.log("element: "+element.id)
            pub.innerHTML = `
                <div id="publicacion">
                    <em id="fecha">Fecha de publicación: ${element.fecha}</em>
                    <h1>${element.titulo}</h1>
                    <img src="../img/${element.img}" alt="">
                    <p id="descripcion">${element.descripcion} </p>
                    <p id="contenido" >${element.contenido}</p>
                </div>`;
        }
    });
});
