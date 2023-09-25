//vamos a necesitar crear tres variables para guardar el primer numero que metemos, el operador y el tercer numero, así podemos limpiar la caja de numeros
var numero1, numero2, operador

function limpiar() {
    resultado.textContent = "";
}

function baseC() {
    //variables
    var resultado = document.getElementById("resultado")
    var reset = document.getElementById("reset")
    var suma = document.getElementById("suma")
    var resta = document.getElementById("resta")
    var multiplicacion = document.getElementById("multiplicacion")
    var division = document.getElementById("division")
    var igual = document.getElementById("igual")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")

    //funciones para los numeros
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1"
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2"
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3"
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4"
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5"
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6"
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7"
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8"
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9"
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0"
    }

    //funciones para los botones especiales
    reset.onclick = function (e) {
        resetear();
    }
    suma.onclick = function (e) {
        numero1 = resultado.textContent;
        operador = "+";
        limpiar();
    }
    resta.onclick = function (e) {
        numero1 = resultado.textContent;
        operador = "-";
        limpiar();
    }
    division.onclick = function (e) {
        numero1 = resultado.textContent;
        operador = "/";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        numero1 = resultado.textContent;
        operador = "*";
        limpiar();
    }
    igual.onclick = function (e) {
        numero2 = resultado.textContent;
        resolver();
    }

}
function limpiar() {
    resultado.textContent = "";
}
function resetear() {
    resultado.textContent = "";
    numero1 = 0;
    numero2 = 0;
    operador = "";
}
function resolver() {
    var res = 0;
    switch (operador) {
        case "+":
            res = parseFloat(numero1) + parseFloat(numero2);
            break;
        case "-":
            res = parseFloat(numero1) - parseFloat(numero2);
            break;
        case "*":
            res = parseFloat(numero1) * parseFloat(numero2);
            break;
        case "/":
            res = parseFloat(numero1) / parseFloat(numero2);
            break;
    }
    resetear();
    resultado.textContent = res;
}

//FUNCIONALIDAD QUE HACE QUE FUNCIONEN LAS TECLAS
document.addEventListener("DOMContentLoaded", function () {

    // Agrega un evento keydown al documento
    document.addEventListener("keydown", function (event) {
        var key = event.key;

        // Verifica que tecla se presiono y realiza la accion correspondiente
        switch (key) {
            case "1":
                resultado.textContent += "1";
                break;
            case "2":
                resultado.textContent += "2";
                break;
            case "3":
                resultado.textContent += "3";
                break;
            case "4":
                resultado.textContent += "4";
                break;
            case "5":
                resultado.textContent += "5";
                break;
            case "6":
                resultado.textContent += "6";
                break;
            case "7":
                resultado.textContent += "7";
                break;
            case "8":
                resultado.textContent += "8";
                break;
            case "9":
                resultado.textContent += "9";
                break;
            case "0":
                resultado.textContent += "0";
                break;
            case "+":
                numero1 = resultado.textContent;
                operador = "+";
                limpiar();
                break;
            case "-":
                numero1 = resultado.textContent;
                operador = "-";
                limpiar();
                break;
            case "*":
                numero1 = resultado.textContent;
                operador = "*";
                limpiar();
                break;
            case "/":
                numero1 = resultado.textContent;
                operador = "/";
                limpiar();
                break;
            case "Enter":
                numero2 = resultado.textContent;
                resolver();
                break;
            case "Escape":
                resetear();
                break;
            case "Backspace":
                // Borra el ultimo caracter de resultado.textContent
                resultado.textContent = resultado.textContent.slice(0, -1);
                break;
        }
    });

});
