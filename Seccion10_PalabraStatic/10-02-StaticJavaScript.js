//HERENCIA

class Persona {

    static contadorPersonas = 0; 

    static get MAX_OBJ() {
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        }else{
            console.log('Se ha superado el máximo de objetos');
        }
        
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
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    toString() {
        return this.nombreCompleto();
    }

    static saludar() {
        console.log('Saludo');
    }

    static saludar2(persona) {
        console.log(persona.nombreCompleto());
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
        return super.nombreCompleto() + ' ' + this._departamento;
    }

    
}

let persona = new Persona('Alex', 'Jimenez');
console.log(persona.toString());

let empleado = new Empleado('Javier', 'Castro', 'Sistemas');
console.log(empleado.toString());

let persona2 = new Persona('Alex', 'Jimenez');

let persona3 = new Persona('Alex', 'Jimenez');

let persona4 = new Persona('Alex', 'Jimenez');

let persona5 = new Persona('Alex', 'Jimenez');

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);