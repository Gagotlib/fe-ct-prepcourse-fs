function devuelvoUsuario() {
    return 'CAMILO';
 }
 function devuelvoSaludo() {
    return 'Hola';
 }
 function saludar(cb1, cb2) {
    return cb1() + ' ' + cb2();
 }
 var resultado = saludar(devuelvoSaludo, devuelvoUsuario);
 console.log(resultado); 


 
 var devuelvoFrase = function(comida){
    return "Hoy quiero comer: " + comida
 }
 var hablar = function( comida, cb){
    return cb(comida)
 }
 var FraseFinal = hablar("pizza", devuelvoFrase)
 console.log(FraseFinal)