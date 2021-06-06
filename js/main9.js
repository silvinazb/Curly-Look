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

// CARDS 

let cardsHome = ``

PRODUCTOS.forEach (cards => {
    cardsHome += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top w-50 mx-auto d-block" src="${cards.imagen}" alt=""></a>
        <div class="card-body">
            <h4 class="card-title">
            <a href="#" style="color: red" class="text-decoration-none">${cards.nombre}</a>
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

// INICIALIZAR CARRITO 

const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

function actualizarCarrito() {
contenedorCarrito.innerHTML=''

totalCarrito.forEach( (producto) => {

    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')
    div.innerHTML = `
        <p class="mb-0 mr-auto ">${producto.nombre}</p>
        <p class="mb-0 mr-4 ml-auto">Precio: $${producto.precio * producto.cantidad}</p>
        <i onclick=eliminarProducto(${producto.id}) class="fas fa-minus-circle text-secondary lineHei "></i>
        <p class="mb-0 mr-1 ml-1"> Cantidad: ${producto.cantidad}</p>
        <i onclick=agregarAlCarrito(${producto.id}) class="fas fa-plus-circle text-secondary lineHei"></i>
        <i onclick=eliminarProductos(${producto.id}) class="fas fa-trash-alt text-danger ml-4 lineHei"></i>
        `

    contenedorCarrito.appendChild(div)
    
})

contadorCarrito.innerText = totalCarrito.length
precioTotal.innerText = totalCarrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )
}

const valorDelCarritoEnStorage = localStorage.totalCarrito
let  totalCarrito = [];

if (valorDelCarritoEnStorage == null){
    totalCarrito = []
} else{
    totalCarrito = JSON.parse(valorDelCarritoEnStorage);
actualizarCarrito()
}