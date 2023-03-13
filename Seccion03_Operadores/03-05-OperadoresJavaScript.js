//OPERADOR AND &&
let a = 8;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro de rango");
}else{
    console.log("Fuera de rango");
}

//OPERADOR OR ||
let vacaciones = true, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("Puedo asistir")
}else{
    console.log("No puedo asistir")
}