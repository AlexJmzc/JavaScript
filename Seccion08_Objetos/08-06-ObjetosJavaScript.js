function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '0999460606';

let padre = new Persona('Alex', 'Jimenez', 'a@gmail.com');
console.log(padre);
console.log(padre.tel);
padre.tel = '1234567890';
console.log(padre.tel);

let hijo = new Persona('Javier', 'Jimenez', 'j@gmail.com');
console.log(hijo);
console.log(hijo.tel);

padre.nombre = 'A';
console.log(padre);
console.log(hijo.nombreCompleto());