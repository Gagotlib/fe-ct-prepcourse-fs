//VARIABLES

// String
var bootcamp = "Henry";
console.log (bootcamp.length); //muestra el largo del string

//Numeros
var entero = 10;
var negativo = -5;
var decimal = 0.5;

// booleanos
var estoydivertido = true

// Undefined
var caja;

// Null
var nada = null

//operadores matematicos
console.log ( 3 + 5);

//operadores de comparacion
console.log(4 > 7)
console.log(4 < 7)

3 === "3"; // FALSE --> compara valor y tipo de dato

3 == "3"; // TRUE --> compara valor 

//FUNCIONES
function sumatres(x) {
    console.log( x + 3);
}
sumatres(5)

var sumados = function(x){ // guarda la funcion dentro de una variable
    console.log(x + 2)
    return x + 2 ; //no imprime resultado en consola, lo devuelve
}

var sumaTres = (x) => {
    return x + 3;
}

//CONDICIONALES

function viajar (destino){
    if (destino == "Brasil") {
        console.log("gire a la izquierda")}
    else if (destino == "Argentina") {
        console.log("gire a la derecha")}
    else{
        console.log("nos perdimos")}
}
