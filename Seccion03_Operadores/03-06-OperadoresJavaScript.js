let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 101;
resultado = (numero % 2 == 0) ? "par" : "impar";
console.log(resultado);


//---------------------------------------
let miNumero = "19";

console.log(typeof(miNumero))

let edad = Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un número")
}else{
    if(edad >= 18){
        console.log("Puede votar")
    }else{
        console.log("No puede votar")
    }
}


if(isNaN(edad)){
    console.log("No es un número")
}else{
    res = (edad > 18) ? "Puede votar" : "No puede votar";
    console.log(res);
}