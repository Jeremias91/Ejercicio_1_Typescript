// Crear instancias y demostrar la funcionalidad

// Crear un caballo
let miCaballo = new Caballo("Spirit", 5, "Mustang");

// Crear un establo con el caballo
let miEstablo = new Establo(miCaballo);
miEstablo.mostrarCaballo();  // En el establo está Spirit, un Mustang.

// Crear un jinete con el caballo
let jinete = new Jinete("Pedro", miCaballo);
jinete.montarCaballo();  // Pedro está montando a Spirit.

// Crear un jinete sin un caballo
let jineteSinCaballo = new Jinete("Carlos");
jineteSinCaballo.montarCaballo();  // Carlos no tiene un caballo para montar.