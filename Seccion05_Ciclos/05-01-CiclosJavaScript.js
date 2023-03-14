//Ciclo WHILE
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}

console.log("Fin del ciclo While");


//Ciclo DOWHILE

do {
    console.log(contador);
    contador++;
} while (contador < 2);

console.log(contador);
console.log("Fin del ciclo DoWhile");


//Ciclo FOR
for (contador = 0; contador < 3; contador++) {
    console.log(contador);
}

console.log("Fin del ciclo For");


//Ejemplo BREAK
for (contador = 0; contador <= 10; contador++) {
    if(contador % 2 == 0){
        console.log(contador);
        break;
    }
}

console.log("Fin del ciclo");


//Ejemplo CONTINUE
for (contador = 0; contador <= 10; contador++) {
    if(contador % 2 != 0){
        continue;
    }
    else
    {
        console.log(contador);
    }
}

console.log("Fin del ciclo");