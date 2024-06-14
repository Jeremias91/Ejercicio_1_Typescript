// Clase base Animal
class Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido(): void {
        console.log("El animal hace un sonido.");
    }
}