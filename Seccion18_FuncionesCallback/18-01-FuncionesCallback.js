miFuncion1();

miFuncion2();

function miFuncion1() {
    console.log('Funcion 1');
}

function miFuncion2() {
    console.log('Funcion 2');
}



//Función de tipo callback
let imp = function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(n1, n2, funcionCallback) {
    let res = n1 + n2;

    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp);


//Llamadas asincronas con uso setTimeout
function miFuncionCallback() {
    console.log('Funcion despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function(){ console.log('Funcion despues de 4 segundos' )}, 4000);

setTimeout( () => console.log('Funcion despues de 5 segundos'), 5000);

