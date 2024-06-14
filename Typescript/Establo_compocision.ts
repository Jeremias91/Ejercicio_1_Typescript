// Clase Establo utiliza composición para tener un Caballo
class Establo {
    caballo: Caballo;

    constructor(caballo: Caballo) {
        this.caballo = caballo;
    }

    mostrarCaballo(): void {
        console.log(`En el establo está ${this.caballo.nombre}, un ${this.caballo.raza}.`);
    }
}