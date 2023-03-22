class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get TipoEntrada() {
        return this._tipoEntrada;
    }

    get Marca() {
        return this._marca;
    }

    set TipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    set Marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `${this._tipoEntrada} ${this._marca}`;
    }
}

//--------------------------------------------------------------------------

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get IdRaton() {
        return this._idRaton;
    }

    toString() {
        return `${this._idRaton} ${super.toString()}`;
    }
}

//--------------------------------------------------------------------------

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get IdTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `${this._idTeclado} ${super.toString()}`;
    }
}

//--------------------------------------------------------------------------

class Monitor {
    static contadorMonitores = 0;
    
    constructor(marca, tamanio) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get IdMonitor() {
        return this._idMonitor;
    }

    get Marca() {
        return this._marca;
    }

    get Tamanio() {
        return this._tamanio;
    }

    set Marca(marca) {
        this._marca = marca;
    }

    set Tamanio(tamanio) {
        this._tamanio = tamanio;
    }

    toString() {
        return `${this._idMonitor} ${this._marca} ${this._tamanio}`;
    }
}

//----------------------------------------------------------------------------------

class Computador {
    static contadorComputadoras = 0;

    constructor(nombre) {
        this._idComputador = ++Computador.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = [];
        this._teclado = [];
        this._raton = [];
    }

    get IdComputador() {
        return this._idComputador;
    }

    get Nombre() {
        return this._nombre;
    }

    set Nombre(nombre) {
        this._nombre = nombre;
    }

    agregarMonitor(monitor) {
        if(this._monitor.length < 1)
        {
            this._monitor = monitor;
        }
        else
        {
            console.log("Ya tiene monitor");
        }
    }

    agregarTeclado(teclado) {
        if(this._teclado.length < 1)
        {
            this._teclado = teclado;
        }
        else
        {
            console.log("Ya tiene teclado");
        }
    }

    agregarRaton(raton) {
        if(this._raton.length < 1)
        {
            this._raton = raton;
        }
        else
        {
            console.log("Ya tiene ratón");
        }
    }

    toString() {
        return `Computador: ${this._idComputador}, ${this._nombre} con: \n
                Monitor: ${this._monitor.toString()} \n
                Teclado: ${this._teclado.toString()} \n
                Ratón: ${this._raton.toString()}`;
    }

}

//---------------------------------------------------------------------------------------

class Orden {
    static contadorOrdenes = 0;

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get IdOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let orden = '';

        for(let computador of this._computadoras) {
            orden += '\n{' + computador.toString() + '}';
        }

        return `Orden: ${this._idOrden}, Computadoras: \n
                ${orden}`;
    }
}

let orden = new Orden();

let computadora1 = new Computador('HP');
console.log(computadora1.IdComputador);

let monitor = new Monitor('Samsung', 25);
let teclado = new Teclado('USB', 'Hurricane');
let raton = new Raton('USB', 'Samsung');

computadora1.agregarMonitor(monitor);
computadora1.agregarTeclado(teclado);
computadora1.agregarRaton(raton);

orden.agregarComputadora(computadora1);

console.log(orden.mostrarOrden())