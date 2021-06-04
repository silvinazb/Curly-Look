// AGREGAR AL CARRITO 

function agregarAlCarrito (id) {
    let productoElegido = PRODUCTOS.find(el => el.id == id)
        totalCarrito.push(productoElegido)
        localStorage.totalCarrito = JSON.stringify(totalCarrito);
        
        actualizarCarrito ()
    }

// ELIMINAR DEL CARRITO 

function eliminarProducto(id) {
    let productoAEliminar = totalCarrito.find( el => el.id == id )
    let indice = totalCarrito.indexOf(productoAEliminar)

    totalCarrito.splice(indice, 1)
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
            quantity: 1,
            currency_id: "ARS",
            unit_price: Number(element.precio),
        }; 
        return nuevoElemento;
    });
    console.log(carritoFinal);
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