function encriptar(){
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("palabra__mensaje");
let parrafo = document.getElementById("palabra__parrafo");
let muneco = document.getElementById("muneco")

let textoCifrado = texto
                    .replace(/e/gi, "enter")
                    .replace(/i/gi, "imes")
                    .replace(/a/gi, "ai")
                    .replace(/o/gi, "ober")
                    .replace(/u/gi, "ufat");
if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto Encriptado";
    document.getElementById("palabra__mensaje").textContent = "Texto Encriptado con éxito";
    ("palabra__parrafo").textContent = "";
    muneco.src = "./recursos/imagenes/Like.png";
}else{
    muneco.src = "./recursos/imagenes/ahah.gif";
    tituloMensaje.textContent = "No hay mensaje";
    alert("Ingresa un texto");
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
}
}

function desencriptar(){
let texto = document.getElementById("texto").value;
let tituloMensaje = document.getElementById("palabra__mensaje");
let parrafo = document.getElementById("palabra__parrafo");
let muneco = document.getElementById("muneco")

let textoCifrado = texto
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");

if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto Encriptado";
    document.getElementById("palabra__mensaje").textContent = "Texto desencriptado con éxito";
    ("palabra__parrafo").textContent = "";
    muneco.src = "./recursos/imagenes/Muñeco.png";
}else{
    muneco.src = "./recursos/imagenes/ahah.gif";
    tituloMensaje.textContent = "No hay mensaje";
    alert("Ingresa un texto");
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    
    }
}


