// *************** Ejemplo SWITCH Toni Ferra

// VARIABLES
// piedra = 0, papel = 1, tijera = 2
var elementos_del_juego = ["piedra", "papel", "tijera"];

// FUNCIONES
function game(jugador01, jugador02) {
  switch (true) {
    case jugador01 == jugador02:
      console.log("EMPATE");
      break;
    case jugador01 == 0 && jugador02 == 2:
    case jugador01 == 1 && jugador02 == 0:
    case jugador01 == 2 && jugador02 == 1:
      console.log("GANA Jugador01");
      break;
    default:
        console.log("GANA Jugador02");
  }
}