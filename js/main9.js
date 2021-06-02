let valorDelCarritoEnStorage = JSON.parse(localStorage.getItem("totalCarrito"));
const  totalCarrito = [];


// Creacion de navBar con DOM
LINKS.forEach (enlaces => {
    linksWeb += `
    <ul  class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="${enlaces.enlace}">${enlaces.nombre}</a>
        </li>
    </ul>`;
})

document.getElementById('navbarResponsive').innerHTML = linksWeb;

// Creacion de modal 

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


// Creacion de cards con DOM
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
        <button onclick="agregarAlCarrito(${cards.id})"> Agregar al carrito</button>
        </div>
        </div>
    </div>`;
})

document.getElementById('productos').innerHTML = cardsHome;

/**
 * Esta funcion agrega productos al carrito
 * @param {*} precio Este parametro es para el precio del producto
 * @param {*} descuento Este parametro es para el descuento del producto
 */

function agregarAlCarrito (id) {
    let productoElegido = PRODUCTOS.find(el => el.id == id)
        totalCarrito.push(productoElegido)
        // console.log(totalCarrito)
        // document.getElementById('total-carrito').innerHTML = `$${totalCarrito}`;
        localStorage.setItem('total-carrito', JSON.stringify(totalCarrito))
        
    }

// Filtros 

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
        <button onclick="agregarAlCarrito(${cards.precio}, ${cards.descuento})"> Agregar al carrito</button>
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
        <button onclick="agregarAlCarrito(${cards.precio}, ${cards.descuento})"> Agregar al carrito</button>
        </div>
        </div>
    </div>`
    })
    $('#productos').html(cardsHome);
}

// Animaciones 

// $("#fade-in").on("click", function (){
//     $("#circulo").fadeIn("fast", function (){
//         $("#circulo").animate({left: 80,
//             width: '6.5em', 
//             height: '6.5em',}
//             , 1500)
//         $("#circulo").css("border", "dotted")
//         $("#circulo").delay(1000)
//         $("#circulo").fadeOut(2000)
//     });
// });