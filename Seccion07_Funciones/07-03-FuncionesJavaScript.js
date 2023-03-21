let resultado = sumarTodo(1, 5, 4, 3, 6);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
         suma += arguments[i];
    }

    return suma;
}