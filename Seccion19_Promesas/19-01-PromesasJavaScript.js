let miPromesa = new Promise((resolve, rejected) => {
    let expression = true;
    if (expression) {
        resolve('Resuelto');
    }
    else
    {
        rejected('Error');
    }
});


/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));*/

let promesa = new Promise((resolver) => {
    //console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa y timeout'), 3000);
    //console.log('Fin promesa');
});

//promesa.then(valor => console.log(valor));

//Async indica que una función regresa una promesa
async function miFuncionPromesa() {
    return 'Saludos con promsa y async'
}

//miFuncionPromesa().then(valor => console.log(valor));

//Async con await
async function funcionPromesaAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

//funcionPromesaAwait();


//Promesas, await, async y setTimeout
async function funcionPromesaAwaitTimeOut() {
    console.log('Inicio funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('Promesa con await y timeout'), 3000);
    });

    console.log(await miPromesa);
    console.log('Fin funcion');
}

funcionPromesaAwaitTimeOut();