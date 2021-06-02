let valorDelCarritoEnStorage = JSON.parse(localStorage.getItem("totalCarrito"));
const  totalCarrito = [];

function agregarAlCarrito (id) {
    let productoElegido = PRODUCTOS.find(el => el.id == id)
        totalCarrito.push(productoElegido)
        // console.log(totalCarrito)
        // document.getElementById('total-carrito').innerHTML = `$${totalCarrito}`;
        localStorage.setItem('total-carrito', JSON.stringify(totalCarrito))
        
        actualizarCarrito ()
    }


    const contenedorCarrito = document.getElementById('carrito-contenedor')

function actualizarCarrito() {
    contenedorCarrito.innerHTML=''

    totalCarrito.forEach( (producto) => {

        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                        <p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio}</p>
                        <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = totalCarrito.length
    precioTotal.innerText = totalCarrito.reduce( (acc, el) => acc += el.precio, 0 )
}

function eliminarProducto(id) {
    let productoAEliminar = totalCarrito.find( el => el.id == id )
    let indice = totalCarrito.indexOf(productoAEliminar)

    totalCarrito.splice(indice, 1)
    actualizarCarrito()
}

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

