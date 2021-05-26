class Navbar {
    constructor (nombre, enlace) {
        this.nombre = nombre
        this.enlace = enlace
    }
}

const linkOne = new Navbar('Home', "index.html")
const linkTwo = new Navbar('Nosotros', "")
const linkThree = new Navbar('<i class="fas fa-cut"></i> Tips', "")
const linkFour = new Navbar('Contacto', "contact.html")

const LINKS = [linkOne, linkTwo, linkThree, linkFour]

let linksWeb = ``

