suma = miFuncion(2, 4);
console.log(suma);

//Declarar la funcion
function miFuncion(a, b){
    return a + b;
}

suma = miFuncion(3, 4);
console.log(suma);


//Funciones de tipo expresión
let sumar = function (a, b){return a + b};

suma = sumar(1, 2);
console.log(suma);


//Funciones SelfInvoking
(function (a, b){
    console.log("Ejecutando la función " + (a + b));
})(10, 11);


