/*
Ejemplos de tipos de datos
JAVASCRIPT
*/

//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato number
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan", 
    apellido : "Perez",
    telefono : "12345"
}
console.log(typeof objeto);

//Tipo de dato boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Tipo de dato undefinied
var x;
console.log(typeof x);

//x = undefinied;
console.log(typeof x);

//null = ausencia de valor;
var y = null;
console.log(typeof y);

//Arreglos
var autos = ['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);