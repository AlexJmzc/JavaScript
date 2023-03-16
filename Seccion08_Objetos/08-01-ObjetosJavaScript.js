let x = 10;
console.log(x.lenght);

let persona = {
    nombre: 'Alex',
    apellido: 'Jimenez',
    email: 'a@gmail.com',
    edad: 22,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());