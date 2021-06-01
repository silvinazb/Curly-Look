class Navbar {
    constructor (nombre, enlace) {
        this.nombre = nombre
        this.enlace = enlace
    }
}

const linkOne = new Navbar('Nosotros', "")
const linkTwo = new Navbar('<i class="fas fa-cut"></i> Tips', "")
const linkThree = new Navbar('Contacto', "contact.html")
const linkFour = new Navbar('<button id="boton-carrito"><i class="fas fa-shopping-cart"></i><span id="contadorCarrito"> Carrito</span></button>', "")

const LINKS = [linkOne, linkTwo, linkThree, linkFour]

let linksWeb = ``

