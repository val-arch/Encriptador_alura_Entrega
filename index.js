/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function encriptar() {

    var mensajeOriginal = document.getElementById("mensaje").value;
    
    var mensajeCodificado = mensajeOriginal.replace(/e/gim, "enter")
    var mensajeCodificado =  mensajeCodificado.replace(/i/gim, "imes")
    var mensajeCodificado =  mensajeCodificado.replace(/a/gim, "ai")
    var mensajeCodificado =  mensajeCodificado.replace(/o/gim, "ober")
    var mensajeCodificado =  mensajeCodificado.replace(/u/gim, "ufat");

    if(mensajeOriginal.length != 0) {
        document.getElementById("munieco").style.display = "none";
        document.getElementById("mensajeEncriptado").style.display = "block";
        document.getElementById("mensajeEncriptado").innerHTML = mensajeCodificado;
        document.getElementById("titulo-mensaje").style.display = "none";
        document.getElementById("parrafo").style.display = "none";
        document.getElementById("copy").style.display = "block";
        document.getElementById("copy").style.display = "innherit";
        document.getElementById("limpiar").style.display = "block";
        document.getElementById("limpiar").style.display = "innherit";
        document.getElementById("mensaje").value = "";
    }else {
        swal("Opps!", "Debes ingresar un texto", "warning");
    }

}

function desencriptar() {

    var mensajeOriginal = document.getElementById("mensaje").value;
    
    var mensajeCodificado = mensajeOriginal.replace(/enter/gim, "e")
    var mensajeCodificado =  mensajeCodificado.replace(/imes/gim, "i")
    var mensajeCodificado =  mensajeCodificado.replace(/ai/gim, "a")
    var mensajeCodificado =  mensajeCodificado.replace(/ober/gim, "o")
    var mensajeCodificado =  mensajeCodificado.replace(/ufat/gim, "u");

    if(mensajeOriginal.length != 0) {
        document.getElementById("munieco").style.display = "none";
        document.getElementById("mensajeEncriptado").style.display = "block";
        document.getElementById("mensajeEncriptado").innerHTML = mensajeCodificado;
        document.getElementById("titulo-mensaje").style.display = "none";
        document.getElementById("parrafo").style.display = "none";
        document.getElementById("copy").style.display = "block";
        document.getElementById("copy").style.display = "innherit";
        document.getElementById("limpiar").style.display = "block";
        document.getElementById("limpiar").style.display = "innherit";
        document.getElementById("mensaje").value = "";
    }else {
        swal("Oops!", "Debes ingresar un texto", "warning");
    }

}


function copiarTexto() {
    let elemento = document.getElementById("mensajeEncriptado");
    let texto = elemento.innerText || elemento.textContent;

    if(elemento.innerText != 0 || elemento.textContent != 0) {
        try {
            navigator.clipboard.writeText(texto);
            swal("Info", "El texto fue copiado con éxito", "info");
        } catch (err) {
            swal("Oops!", "No se pudo copiar el texto", "error");
        }
    }else {
        swal("Oops!", "Ese elemento no puede copiarse", "error");
    }

}

function limpiar() {

    document.getElementById("mensajeEncriptado").innerText = "";
    document.getElementById("munieco").style.display = "flex";

}