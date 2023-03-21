class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProductos;
    }

    get idProducto() {
        return this._idProducto;
    }

    get Nombre() {
        return this._nombre;
    }

    get Precio() {
        return this._precio;
    }

    set Nombre(nombre) {
        this._nombre = nombre;
    }

    set Precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `idProducto: ${this._idProducto}, 
                Nombre: ${this._nombre}, 
                Precio: ${this._precio}$`;
    }
}


class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }
    
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._productosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if(this._productosAgregados == Orden.MAX_PRODUCTOS)
        {
            console.log('Máximo de productos alcanzado, no se pueden agregar más productos')
        }
        else
        {
            this._productos.push(producto);
            this._productosAgregados++;
        }
    }

    calcularTotal() {
        let total = 0;
        for (let producto of this._productos) {
            total += producto.Precio;
        }
        
        return total;
    }

    mostrarOrden() {
        let orden = '';

        for(let producto of this._productos) {
            orden += '\n{' + producto.toString() + '}';
        }

        return `Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${orden}`;
        
    }
}

let producto = new Producto('Galletas', 10.25);
let producto2 = new Producto('Pantalon', 400);

console.log(producto.toString());

let orden = new Orden();

orden.agregarProducto(producto);
orden.agregarProducto(producto2);

console.log(orden.mostrarOrden());