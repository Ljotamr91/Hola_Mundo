//  APUNTES  comentarios de una sola linea


/*
    comentarios de varias lineas 
*/

// VARIABLES GLOBALES
// -----------------------
var ciudad = 'palma';
var pueblo = 'Algaida';


//  FUNCIONES
// -------------
function suma (a,b){

}

function resta (a,b){

}

function multiplica (a,b){

}

/*

    Tipos de datos
  ---------------------------
  'var' crea una variable siempre se crean arriba para que las carge al principio

*/

//  valor numero (integer)

var numero; // inicializa la variable 

var numero = 40; // inicializa la variable con valor 
// Valor de texto (strings)
var texto = 'aqui introduzco el texto en html serian dobles comillas'

// valores boleanos
var verdadero = true;
var false = false;

// valores de lista tipo objetos

//  ARRAY   

var mascotas = ['perro', 'gato','pez',]
    //  console.log(mascotas).length;     3 nos dice la distancia del array
    //  acceder a datos del array macotas[0] accede a perro
    //  mascotas.push('canario');  añadira canario al final del array
    //  mascotas.pop(); elimina el ultimo elemento del ARRAY es la mas usada
    //  mascota.unshift('Iguana')   añade elemento al principio
    //  mascotas.shift();  elimina elementos del principio del array
    //  mascotas.indexOf('gato') nos muestra la posicion de gato que es 1
    //  

var fichaMascota = [
    'perro', 2, 'boby',
    'gato', 3, 'Miska' 
];

var pregunta = fichaMascota.indexOf('Miska');
//resultado 5


 

var lista_array_arreglo = {23,45,67,13,89,90}

//  OBJETO

var objeto = {
                nombre 'Jose Luis'
                ciudad 'Palma'
                cp '07008'
}




'Primera linea \n segunda linea \n'

var parrafo = "Libro de\"Autor\" de 1988"

console.log(parrafo)

/*
    Funciones
    -------------
    Dos tipos / dos maneras de generar funciones
*/

//  Funciones Declarativas
function nuevaFuncion() {
    return'estamos devolviendo un dato';
}


//  Funciones Expresivas
var nuevaFuncion() {
    'estamos devolviendo un dato';
}

// llamar a una funcion
nuevaFuncion();

// Funciones con parametros
function suma(valor1, valor2) {
    console.log(valor1 + valor2);
}
suma(42,498)

function resta(valor1, valor2){
    var resultado = valor1 - valor2;
    console.log(resultado);
}

function sumar(a, b){
    console.log(`El resultado de la suma es: ${a + b}`);
}

// Scope 

// Scope GLOBAL variable global
var ciudad = 'Palma';
var cp = 0700;

// Scope LOCAL Variable Local
function entorno(valor1, valor2) {
    var cp = 07010;
    console.log(cp + "  " + ciudad);
}

valor1 + 4;

// Hoisting

// Variable Declaration
console.log(pueblo)
var pueblo ='Algaida';
// nos dara undefined por que intenta mostrar algo que todavia no esta declarado 

// Debil Tipado

10 + "10"; // 1010 concatena

10*"10"; // 100 multiplica aunque sea texto con numero

10 + true; // 11

// Coercion en Javscript

//  Coercion implicita
var implicita = 10 + "10"; // recombierte el string "10" en integer 10 y lo multiplica automaticamente

//  Coercion Explicita
var explicito = 10 + Number("10"); // convierte el 10 en numero y da como resultado 20 por la suma

var explicito = String (10) + "10"; // convierte el 10 en texto y concatenara dando como resultado 1010

// BOOLEAN

/* True
    {}
    1 y sucesivo
    function
*/

/* Falso

    false
    ""
    vacio 
    0
    null
    Nan, 
*/

// OPERADORES 
+
-
*
/
%  // resto o residuo de las divisiones
** // elevado a...

// Operadores de igualdad

 // = no es de igualdad, es de asignacion var nombre 
 = "nombreAsignado";

 // == compara algo
5 == "5" // TRUE

// === mira el valor y el tipo de valor
5 ==="5";   // FALSE

//!= es diferente
5 != 5; // FALSE 

// Operadores de asignacion

=
+=
*=
-=
/=

// operadores de comparacion

>
5 > 10; // False

< 
5 < 10; // True

>= 
5 >= 10; // True

<=
5 <= 10; // True

// IF
var num = 1;

if (num > 0) {  //  si
    console.log('num true');
}

var tiempo = 'sol';

if (tiempo == 'sol') {
    console.log('Buenos dias');
}

else if (tiempo == 'Nublado') { //  si pasa esto otro
    console.log('Esta nublado quedate en casa');
}


else {  //  siempre es el ultimo
    console.log('Buenas Noches')
}

// SWICH

var tiempo = 'sol';

switch(tiempo){     //obligatorio en cada caso terminar con break
    case 'sol' && 'mañana':     //  && si hace sol && y ademas es mañana 
        console.log('Buenos dias');
        break;
    case 'nublado':
        console.log('Coje paraguas');
        break;
    case 'noche':
        console.log('Buenas Noches');
        break;
    default:
        console.log('Error');   //opcional para que sepan que algo esta mal
}