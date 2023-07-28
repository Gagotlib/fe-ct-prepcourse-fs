  //OPERADORES LOGICOS

  //AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7);
mayorYMenorYPar(8); 

// OR
function operadorOr(str) {
   if (str === 'Henry' || str.length < 2) console.log(true);
   else console.log(false);
}
operadorOr('Henry');
operadorOr('Javascript');
operadorOr('H');

// NOT
function negacion(permiso) {
   if (permiso) console.log('Tiene permiso');
}
negacion(true);
negacion(false);

//BUBLE FOR
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 //BUCLE WHILE
 while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
    };