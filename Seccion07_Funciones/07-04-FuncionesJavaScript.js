let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);
console.log(x);
//console.log(a);

//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p){
    p.nombre = 'Alex';
    p.apellido = 'Jimenez';
}

cambiarValorObjeto(persona);
console.log(persona);