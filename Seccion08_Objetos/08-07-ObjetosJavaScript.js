let persona1 = {
    nombre: 'Alex',
    apellido: 'Jimenez',
    nombreCompleto: function(titulo, tel){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: 'Javier',
    apellido: 'Jimenez',
    
}

//USO DE CALL PARA USAR EL METODO DE PERSONA 1
console.log(persona1.nombreCompleto('LIC', '0123456789'));

console.log(persona1.nombreCompleto.call(persona2, 'ING', '0999460606'));

//USO DE APPLY PARA USAR EL METODO DE PERSONA 1
console.log(persona1.nombreCompleto('LIC', '0123456789'));

let arreglo = ['ING', '0999460606'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));