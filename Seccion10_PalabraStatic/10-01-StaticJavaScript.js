//HERENCIA

class Persona {

    static contadorObjetosPersona = 0;  //Atributo de la clase

    email = 'Valor default email'; //Atributo del objeto

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador' + Persona.contadorObjetosPersona);
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
console.log(persona);

let empleado = new Empleado('Javier', 'Castro', 'Sistemas');
console.log(empleado);
console.log(empleado._nombre);
console.log(empleado.nombreCompleto());

console.log(empleado.toString());

//persona.saludar();  //NO SE PUEDE LLAMAR A UN METODO ESTATICO DESDE UN OBJETO

Persona.saludar2(persona);

Empleado.saludar2(empleado);

console.log(persona.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

console.log(persona.email);
console.log(Persona.email);

persona.email = 'a@gmail.com';
console.log(persona.email);