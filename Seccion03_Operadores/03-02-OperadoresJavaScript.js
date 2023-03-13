let a = 3, b = 2, c = 1, d = 4;

//PRECEDENCIA DE OPERADORES
let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z)

//OPERADORES DE ASIGNACIÓN
a = 1;

a += 3; // a = a + 3
console.log(a);

a -= 2; // a = a - 2
console.log(a)


//OPERADORES DE COMPARACIÓN
//De igualdad == o ===
a = 3, b = 2, c = "3";

z = a == c; //Se revisa el valor sin importar el tipo
console.log(z)

z = a === c; //Se revisa el valor y el tipo
console.log(z)

//De distinción != o !==
z = a != c; //Se revisa el valor sin importar el tipo
console.log(z)

z = a !== c; //Se revisa el valor y el tipo
console.log(z)

//OPERADORES RELACIONALES
a = 3, b = 3, c = "3";

z = a < b;
console.log(z)

z = a <= b;
console.log(z)

z = a > b;
console.log(z)

z = a >= b;
console.log(z)