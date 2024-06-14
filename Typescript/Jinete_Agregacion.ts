// Clase Jinete utiliza agregación para tener un Caballo
class Jinete {
    nombre: string;
    caballo?: Caballo;

    constructor(nombre: string, caballo?: Caballo) {
        this.nombre = nombre;
        this.caballo = caballo;
    }

    montarCaballo(): void {
        if (this.caballo) {
            console.log(`${this.nombre} está montando a ${this.caballo.nombre}.`);
        } else {
            console.log(`${this.nombre} no tiene un caballo para montar.`);
        }
    }
}