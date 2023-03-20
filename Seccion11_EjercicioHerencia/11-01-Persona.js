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