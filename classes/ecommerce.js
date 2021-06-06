// AGREGAR AL CARRITO 

function agregarAlCarrito (item) {
    let productoElegido = totalCarrito.find(el => el.id == item)

    if(productoElegido){
        productoElegido.cantidad +=1
    } else{
        let {id, nombre, precio} = PRODUCTOS.find(el => el.id == item)
        totalCarrito.push({id: id, nombre: nombre, precio: precio, cantidad: 1})
    }
        localStorage.totalCarrito = JSON.stringify(totalCarrito);
        
        actualizarCarrito ()
    }


// ELIMINAR DEL CARRITO (DE A UN ELEMENTO POR MISMO PRODUCTO)

function eliminarProducto(id) {
    let productoAEliminar = totalCarrito.find( el => el.id == id )

    productoAEliminar.cantidad--

    if(productoAEliminar.cantidad == 0){
        let indice = totalCarrito.indexOf(productoAEliminar)
        totalCarrito.splice(indice, 1)
    }

    localStorage.totalCarrito = JSON.stringify(totalCarrito)
    actualizarCarrito()
}

// ELIMINAR DEL CARRITO (TODOS LOS ELEMENTOS DE UN MISMO PRODUCTO)

function eliminarProductos(id) {
    let productosAEliminar = totalCarrito.find( el => el.id == id )

    productosAEliminar.cantidad

    if(productosAEliminar.cantidad != 0){
        let indice = totalCarrito.indexOf(productosAEliminar)
        totalCarrito.splice(indice, 1)
    }

    localStorage.totalCarrito = JSON.stringify(totalCarrito)
    actualizarCarrito()
}

// VACIAR CARRITO 

function vaciarCarrito() {
    totalCarrito = []
    localStorage.totalCarrito = JSON.stringify(totalCarrito)

    actualizarCarrito()
}

// PAGAR 

async function generarLinkPago() {
    const carritoFinal = totalCarrito.map((element) =>{
        let nuevoElemento = {
            title: element.nombre,
            description: "",
            picture_url: "",
            category_id: element.id,
            quantity: element.cantidad,
            currency_id: "ARS",
            unit_price: Number(element.precio),
        }; 
        return nuevoElemento;
    });
    const response = await fetch(
        "https://api.mercadopago.com/checkout/preferences", 
        {
        method: "POST",
        headers: {
            Authorization: 
                "Bearer TEST-549129222945267-053120-090fda39cac4bf9a4101548a91353243-183263403",    
    },
        body: JSON.stringify({
            items: carritoFinal,
    }),
    }
    );
    const data = await response.json()
    window.open(data.init_point, "_blank");
}