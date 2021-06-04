const valorDelCarritoEnStorage = localStorage.totalCarrito
let  totalCarrito = [];

if (valorDelCarritoEnStorage == null){
    totalCarrito = []
} else{
    totalCarrito = JSON.parse(valorDelCarritoEnStorage);
    // document.getElementById('carrito-contenedor').innerHTML = totalCarrito

}

// NAVBAR
LINKS.forEach (enlaces => {
    linksWeb += `
    <ul  class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="${enlaces.enlace}">${enlaces.nombre}</a>
        </li>
    </ul>`;
})

document.getElementById('navbarResponsive').innerHTML = linksWeb;

// MODAL

const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})


// CARDS 

let cardsHome = ``

PRODUCTOS.forEach (cards => {
    cardsHome += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top w-50 mx-auto d-block" src="${cards.imagen}" alt=""></a>
        <div class="card-body">
            <h4 class="card-title">
            <a href="#" style="color: red">${cards.nombre}</a>
            </h4>
            <h5>$${cards.precio}</h5>
            <p class="card-text">Lo mejor para tu pelo</p>
        </div>
        <div class="card-footer">
        <button onclick="agregarAlCarrito(${cards.id})" class=" btn btn-danger mx-auto d-block"> Agregar al carrito</button>
        </div>
        </div>
    </div>`;
})

document.getElementById('productos').innerHTML = cardsHome;

// AGREGAR AL CARRITO 

function agregarAlCarrito (id) {
    let productoElegido = PRODUCTOS.find(el => el.id == id)
        totalCarrito.push(productoElegido)
        localStorage.totalCarrito = JSON.stringify(totalCarrito);
        
        actualizarCarrito ()
    }

// ACTUALIZAR CARRITO 

    const contenedorCarrito = document.getElementById('carrito-contenedor')

function actualizarCarrito() {
    contenedorCarrito.innerHTML=''

    totalCarrito.forEach( (producto) => {

        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                        <p >${producto.nombre}</p>
                        <p >Precio: $${producto.precio}</p>
                        <button onclick=eliminarProducto(${producto.id}) class="border-0 bg-white"><i class="fas fa-trash-alt text-danger "></i></button>
                    `

        contenedorCarrito.appendChild(div)
        
    })

    contadorCarrito.innerText = totalCarrito.length
    precioTotal.innerText = totalCarrito.reduce( (acc, el) => acc += el.precio, 0 )
}

// ELIMINAR DEL CARRITO 

function eliminarProducto(id) {
    let productoAEliminar = totalCarrito.find( el => el.id == id )
    let indice = totalCarrito.indexOf(productoAEliminar)

    totalCarrito.splice(indice, 1)
    localStorage.totalCarrito = JSON.stringify(totalCarrito)
    actualizarCarrito()
}

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

// VACIAR CARRITO 

function vaciarCarrito() {
    totalCarrito = []
    localStorage.totalCarrito = JSON.stringify(totalCarrito)

    actualizarCarrito()
}

// PAGAR - Falta asociar con mis productos

async function generarLinkPago(){
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
        method: 'POST',
        headers: {
        Authorization: "Bearer "    
    },
        body: JSON.stringify({
            items: [
                {
                title: "Dummy Title",
                description: "Dummy description",
                picture_url: "http://www.myapp.com/myimage.jpg",
                category_id: "cat123",
                quantity: 1,
                currency_id: "ARS",
                unit_price: 10,
                },
                {
                    title: "Dummy Title",
                    description: "Dummy description",
                    picture_url: "http://www.myapp.com/myimage.jpg",
                    category_id: "cat123",
                    quantity: 1,
                    currency_id: "ARS",
                    unit_price: 10,
                    },
                
            ]
    }),
    });
    const data = await response.json()
    window.open(data.init_point, '_blank');
}

// const generarLinkPago = async () => {

//     const carritoAPagar = totalCarrito.map((element) => {
//         let nuevoElemento = {
//         title: element.nombre,
//         description: "",
//         picture_url: element.imagen,
//         category_id: element.id,
//         quantity: Number(element.cantidad),
//         currency_id: "ARS",
//         unit_price: Number(element.precio),
//     };
//     return nuevoElemento;
//     });
//     const resp = await fetch("https://api.mercadopago.com/checkout/preferences", 
//     {
//         method: "POST",
//         headers: {
//             Authorization: 'Bearer TEST-549129222945267-053120-090fda39cac4bf9a4101548a91353243-183263403'
//         },
//         body: JSON.stringify({
//             items: carritoAPagar,
//         })
//     })

//     const data = await resp.json()

//     window.open(data.init_point, "_blank")
// }

// async function generarLinkDePago() {
//     const  = articulosCarrito.map((element) => {
//       let nuevoElemento = {
//         title: element.nombre,
//         description: "",
//         picture_url: element.imagen,
//         category_id: element.id,
//         quantity: Number(element.cantidad),
//         currency_id: "ARS",
//         unit_price: Number(element.precio),
//       };
//       return nuevoElemento;
//     });
//     const response = await fetch(
//       "https://api.mercadopago.com/checkout/preferences",
//       {
//         method: "POST",
//         headers: {
//           Authorization:
//             "Bearer ",
//         },
//         body: JSON.stringify({
//           items: productsToMP,
//         }),
//       }
//     );
//     const data = await response.json();
//     window.open(data.init_point, "_blank");
//   }

// curl -X POST \
//     'https://api.mercadopago.com/checkout/preferences' \
//     -H 'Authorization: Bearer ACCESS_TOKEN_ENV' \ 
//     -d '{
//   "items": [
//     {
//       "title": "Dummy Title",
//       "description": "Dummy description",
//       "picture_url": "http://www.myapp.com/myimage.jpg",
//       "category_id": "cat123",
//       "quantity": 1,
//       "currency_id": "U$",
//       "unit_price": 10
//     }
//   ],
//   "payer": {
//     "phone": {},
//     "identification": {},
//     "address": {}
//   },
//   "payment_methods": {
//     "excluded_payment_methods": [
//       {}
//     ],
//     "excluded_payment_types": [
//       {}
//     ]
//   },
//   "shipments": {
//     "free_methods": [
//       {}
//     ],
//     "receiver_address": {}
//   },
//   "back_urls": {},
//   "differential_pricing": {},
//   "tracks": [
//     {
//       "type": "google_ad"
//     }
//   ]
// }'
// FILTROS

function filtrar(filtro){
    let productosFiltrados = PRODUCTOS.filter((element) => element.categoria == filtro);
    let cardsHome = ``;
    productosFiltrados.forEach(cards => {
        cardsHome += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top w-50 mx-auto d-block" src="${cards.imagen}" alt=""></a>
        <div class="card-body">
            <h4 class="card-title">
            <a href="#" style="color: red">${cards.nombre}</a>
            </h4>
            <h5>$${cards.precio}</h5>
            <p class="card-text">Lo mejor para tu pelo</p>
        </div>
        <div class="card-footer">
        <button onclick="agregarAlCarrito(${cards.id})" class=" btn btn-danger mx-auto d-block"> Agregar al carrito</button>
        </div>
        </div>
    </div>`
    })
    $('#productos').html(cardsHome);
}

function filtrarTodos(){
    let productosFiltrados = PRODUCTOS;
    let cardsHome = ``;
    productosFiltrados.forEach(cards => {
        cardsHome += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top w-50 mx-auto d-block" src="${cards.imagen}" alt=""></a>
        <div class="card-body">
            <h4 class="card-title">
            <a href="#" style="color: red">${cards.nombre}</a>
            </h4>
            <h5>$${cards.precio}</h5>
            <p class="card-text">Lo mejor para tu pelo</p>
        </div>
        <div class="card-footer">
        <button onclick="agregarAlCarrito(${cards.id})" class=" btn btn-danger mx-auto d-block"> Agregar al carrito</button>
        </div>
        </div>
    </div>`
    })
    $('#productos').html(cardsHome);
}

