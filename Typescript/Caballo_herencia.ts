class Caballo extends Animal {
    raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad);
        this.raza = raza;
    }

    relinchar(): void {
        console.log("El caballo relincha.");
    }

    hacerSonido(): void {
        this.relinchar();
    }
}