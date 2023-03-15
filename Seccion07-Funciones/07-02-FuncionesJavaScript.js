function miFuncion(a, b){
    console.log(arguments.length);
        return a + b + arguments[2];
}

let suma = miFuncion(3, 2, 7);
console.log(suma);

console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//FUNCIONES FLECHA
const sumarFuncionTipoFlecha = (a, b) => a + b;
suma = sumarFuncionTipoFlecha(2, 8);
console.log(suma);