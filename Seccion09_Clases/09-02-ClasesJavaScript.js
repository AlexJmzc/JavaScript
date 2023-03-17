//HERENCIA

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

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido;
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //SOBREESCRITURA
    nombreCompleto() {
        return super.nombreCompleto() + ' ' + this._departamento;
    }

    toString() {
        return super.nombreCompleto + ' ' + this._departamento;
    }
}

let persona = new Persona('Alex', 'Jimenez');
console.log(persona);

let empleado = new Empleado('Javier', 'Castro', 'Sistemas');
console.log(empleado);
console.log(empleado._nombre);
console.log(empleado.nombreCompleto());

console.log(empleado.toString());