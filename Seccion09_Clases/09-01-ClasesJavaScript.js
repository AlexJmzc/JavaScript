//NO ES POSIBLE CREAR OBJETOS ANTES DE DECLARAR LA CLASE
//NO SE APLICA EL CONCEPTO DE HOISTING

class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    get apellido() {
        return this._apellido;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }
}

let persona1 = new Persona('Alex', 'Jimenez');
console.log(persona1.nombre);
persona1.nombre = 'JJ';
console.log(persona1.nombre);

let persona2 = new Persona('Javier', 'Castro');
console.log(persona2);