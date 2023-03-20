class Persona {

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona() {
        return this._idPersona;
    }

    get Nombre() {
        return this._nombre;
    }

    get Apellido() {
        return this._apellido;
    }

    get Edad() {
        return this._edad;
    }

    set Nombre(nombre) {
        this._nombre = nombre;
    }

    set Apellido(apellido) {
        this._apellido = apellido;
    }

    set Edad(edad) {
        this._edad = edad;
    }

    toString(){
        return `${this._idPersona}
                ${this._nombre}
                ${this._apellido}
                ${this._edad}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get Sueldo() {
        return this._sueldo;
    }

    set Sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    
    static  contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

let persona1 = new Persona('Javier', 'Jimenez', 22);
console.log(persona1.toString());

let persona2 = new Persona('Alex', 'Castro', 23);
console.log(persona2.toString());


let empleado1 = new Empleado('Alexander', 'Perez', 20, 1000);
console.log(empleado1.toString());

let empleado2 = new Empleado('Andres', 'Jimenez', 18, 650);
console.log(empleado2.toString());

let cliente1 = new Cliente('Jorge', 'Delgado', 40, new Date());
console.log(cliente1.toString())