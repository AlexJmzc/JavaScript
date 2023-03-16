let persona = {
    nombre: 'Alex',
    apellido: 'Jimenez',
    email: 'a@gmail.com',
    edad: 22,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}


//METODO GET
console.log(persona.nombreCompleto);


//METODO SET
console.log(persona.lang);
persona.lang = 'us';
console.log(persona.idioma);