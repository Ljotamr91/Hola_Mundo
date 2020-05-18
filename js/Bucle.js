//  Bucle FOR

//  Ejemplo basico de bucle for creamos variable i y le decimos que si es menor que 20 
//  itere +1 hasta llegar a 20

for (var i=0; i < 20; i++){
    console.log('Hola');
}


//  ****************************************** 

var coches = ['Opel', 'Peugeot', 'Seat', 'Toyota', ];

function marcasCoche(coches) {
    console.log (` este fue uno de mis coches, ${coches}`);
}

for ( var i = 0; i < coches.length; i++) {
    marcasCoche(coches[i]);
}

//  Operador Ternario, IF

var numero = 10;

//  === comparador estricto pregunta si es igual en tipo y contenido
//  ? operador ternario
//  despues del ? podemos escribir la condicion verdadera seguido de dos puntos para la falsa
//  en una linea de codigo resumes 2 posibles casos y lo podemos meter en una variable o encapsularlo en algun tipo de objeto etc
var resultado = numero === 10 ? 'Soy un diez' : 'No soy un diez'


//  Mismo ejemplo con if normal

var numero = 10;

if(numero === 10) {
    var resultado = 'Soy un diez';
}
else{
    var resultado = 'No soy un diez';
}

var resultado = numero === 10 ? 'Soy un diez' : 'No soy un diez'

// ***********************************************************************************
// For Of

for  (var coche of coches) {
    //coche = 'Opel'
    marcasCoche(coche);
}

// *********************************************************************************
// WHILE

while (coches.length > 0) {
    var garaje = coches.shift();
    marcasCoche(garaje);
}

while (coches.length > 1) {
    var garaje = coches(i);
    marcasCoche(garaje);
}

// *********************************************************************************
// DO WHILE

do {
    i++;
    console.log('Hola');
} while ( i < 5 );