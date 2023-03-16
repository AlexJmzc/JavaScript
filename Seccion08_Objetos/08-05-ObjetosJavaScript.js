function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Alex', 'Jimenez', 'a@gmail.com');
console.log(padre);

let hijo = new Persona('Javier', 'Jimenez', 'j@gmail.com');
console.log(hijo);

padre.nombre = 'A';
console.log(padre);
console.log(hijo.nombreCompleto());

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero1 = 1;

let miBoolean = new Boolean(true);
let miBoolean1 = true;

let miArreglo = new Array();
let miArreglo1 = [];

let miFuncion = new Function();
let miFuncion1 = function(){};