const autos = ['BMW', 'Mercedes', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

//RECORRER ELEMENTOS DEL ARRAY
for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}

//MODIFICAR ELEMENTOS DE UN ARREGLO
autos[1] = 'Mercedes Benz';
console.log(autos[1]);

autos.push('Audi');
console.log(autos);

//AGREGAR ELEMENTOS A UN ARREGLO
console.log(autos.length);
autos[autos.length] = 'Cadillac';

console.log(autos);

autos[6] = 'Porshe';
console.log(autos);

//VERIFICAR SI ES UN ARRAY
console.log(typeof(autos));
console.log(Array.isArray(autos));

console.log(autos instanceof Array);