class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado:
                Nombre: ${this._nombre},
                Sueldo: ${this._sueldo}`;
    }
}


class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()}
                Departamento: ${this._departamento}`;
    }
}


function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Empleado)
    {
        console.log('Es un empleado');
    }
    else
    {
        console.log('Es un gerente');
    }
}

let empleado = new Empleado('Javier', 500);

let gerente = new Gerente('Alex', 200, 'Sistemas');

imprimir(gerente);
imprimir(empleado);

