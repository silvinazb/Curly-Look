let valorDelCarritoEnStorage = localStorage.getItem("totalCarrito");
let totalCarrito = 0;

if (valorDelCarritoEnStorage == null){
    totalCarrito = 0;
} else{
    totalCarrito = JSON.parse(valorDelCarritoEnStorage);
}


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


// Creacion de cards con DOM
let cardsHome = ``

PRODUCTOS.forEach (cards => {
    cardsHome += `<div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
        <a href="#"><img class="card-img-top" src="${cards.imagen}" alt=""></a>
        <div class="card-body">
            <h4 class="card-title">
            <a href="#" style="color: red">${cards.nombre}</a>
            </h4>
            <h5>$${cards.precio}</h5>
            <p class="card-text">Lo mejor para tu pelo</p>
        </div>
        <div class="card-footer">
        <input onchange="agregarAlCarrito(${cards.precio}, ${cards.descuento})" type="number" min ="0" max ="10">
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

function agregarAlCarrito (precio, descuento) {
    // cantidad = prompt ('Cuanto desea comprar?') 
    cantidad = 1
        if (chequearDescuento(descuento)){
        totalCarrito += precio*cantidad*descuento
        document.getElementById('total-carrito').innerHTML = `$${totalCarrito}`;
        // Reemplazo de -> console.log (`Se agrego un nuevo producto al carrito. El total es: ${totalCarrito}`) 
        // con modificacion de etiqueta 
    localStorage.totalCarrito = JSON.stringify(totalCarrito);
    }
}

/**
 * Funcion para validar si el producto tiene descuento
 * @param {number} descuento Es el descuento a validar
 * @returns Devuelve un boolean si el producto tiene descuento 
 */
function chequearDescuento (descuento){
    if (descuento > 0){
        return true
    } else{
        return false
    }
}



