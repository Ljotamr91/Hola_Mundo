//  JUEGO: Piedra, Papel, Tijera  Ejemplo Toni Ferra       /* */
//  ---------------------------

// VARIABLES

// Creamos la variable array que contiene los elementos del juego para luego poder recorrer el array segun querramos seleccionar.
// piedra = 0, papel = 1, tijera = 2
var elementos_del_juego = ["piedra", "papel", "tijera"];

// FUNCIONES

// creamos la funcion game con los parametros de los 2 jugadores
// jugardor 01 y 02 son los parametros que recorrera nuestro array segun seleccionen para jugar.
function game(jugador01, jugador02) {

    /*  creamos el condicional if que compruebe si los dos jugadores an seleccionado el mismo elemento del array
        para mostrar el mensaje ponemos acentos para mezclar texto con llamada a variable `EMPATE por ${elementos_del_juego[jugador01]}`  
        que significa el elemento del juego seleccionado por el jugador01
    */
   // comprobar empate
    if (jugador01 == jugador02) {
        console.log(`EMPATE por ${elementos_del_juego[jugador01]}`);
    }
    //  se hace un else if para escribir todas las posibles combinaciones de victoria para el jugador01 con el 
    // ganador jugador01
    else if (jugador01 == 0 && jugador02 == 2 || jugador01 == 1 && jugador02 == 0 || jugador01 == 2 && jugador02 == 1) {
        console.log(`GANA JUGADOR01, porque ${elementos_del_juego[jugador01]} vale más que ${elementos_del_juego[jugador02]}`);     
    } 

    // de lo contrario si no se cumplen ninguno de los casos anteriores gana jugador02 con la llamada a la variable
    // del jugador02 
    // ganador jugador02
    else {
        console.log(`GANA JUGADOR02, porque ${elementos_del_juego[jugador02]} vale más que ${elementos_del_juego[jugador01]}`);  
    }
}

// VER en Consola
console.log("piedra \= 0, papel \= 1, tijera \= 2");

// probarlo en navegador dara como resultado GANA JUGADOR 01 POR SELECCIONAR PIEDRA 
// game(0,2); 
