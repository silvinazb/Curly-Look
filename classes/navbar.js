class Navbar {
    constructor (nombre, enlace) {
        this.nombre = nombre
        this.enlace = enlace
    }
}

const linkOne = new Navbar('Nosotros', "")
const linkTwo = new Navbar('<i class="fas fa-cut"></i> Tips', "")
const linkThree = new Navbar('Contacto', "contact.html")
// const linkFour = new Navbar('<a id="boton-carrito"><i class="fas fa-shopping-cart"></i><span id="contadorCarrito"> Carrito</span></a>', "")

const LINKS = [linkOne, linkTwo, linkThree]

let linksWeb = ``

