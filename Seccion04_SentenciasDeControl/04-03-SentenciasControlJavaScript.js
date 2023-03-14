let hora = 15;
let saludo;

if(hora >= 0 && hora <= 5){
    saludo = "Durmiendo";
}
else if(hora >= 6 && hora <= 11){
    saludo = "Buenos dias";
}
else if(hora >= 12 && hora <= 18){
    saludo = "Buenas tardes";
}
else if(hora >= 19 && hora <= 23){
    saludo = "Buenas noches";
}
else{
    saludo = "Valor no válido";
}

console.log(saludo);