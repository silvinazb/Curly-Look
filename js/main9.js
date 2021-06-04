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
                    <p >${producto.nombre}</p>
                    <p >Precio: $${producto.precio}</p>
                    <button onclick=eliminarProducto(${producto.id}) class="border-0 bg-white"><i class="fas fa-trash-alt text-danger "></i></button>
                `

    contenedorCarrito.appendChild(div)
    
})

contadorCarrito.innerText = totalCarrito.length
precioTotal.innerText = totalCarrito.reduce( (acc, el) => acc += el.precio, 0 )
}
const valorDelCarritoEnStorage = localStorage.totalCarrito
let  totalCarrito = [];

if (valorDelCarritoEnStorage == null){
    totalCarrito = []
} else{
    totalCarrito = JSON.parse(valorDelCarritoEnStorage);
actualizarCarrito()
}