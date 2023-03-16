let persona = {
    nombre: 'Alex',
    apellido: 'Jimenez',
    email: 'a@gmail.com',
    edad: 22,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona['apellido']);

//FOR IN
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

persona.tel = '0999460606';

console.log(persona);


//ELIMINAR PROPIEDAD
delete persona.tel;
console.log(persona);

//IMPRIMIR UN OBJETO
//Concatenar cada valor de cada propiedad}
console.log(persona.nombre + ', ' + persona.apellido);

//For in
for(propiedad in persona){
    console.log(persona[propiedad]);
}

//Values
let personaArray = Object.values(persona);
console.log(personaArray);

//JSON
let personaString = JSON.stringify(persona);
console.log(personaString);