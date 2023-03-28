const  miFuncionFlecha = () => console.log('Función flecha');

miFuncionFlecha();

const saludar = () => {
    return 'Saludos desde la función flecha';
}

console.log(saludar());

const saludar1 = () => 'Saludos desde la función flecha 2';

console.log(saludar1());

const regresaObjeto = () => ({nombre: 'Alex', apellido: 'Jimenez'});

console.log(regresaObjeto());

//const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros('Hola');

const funcionConVariosParametros = (n1, n2) => n1 + n2;

console.log(funcionConVariosParametros(1,5));