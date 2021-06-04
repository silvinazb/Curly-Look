class Navbar {
    constructor (nombre, enlace) {
        this.nombre = nombre
        this.enlace = enlace
    }
}

const linkOne = new Navbar('<i class="far fa-heart"></i> Nosotros', "")
const linkTwo = new Navbar('<i class="fas fa-cut"></i> Tips', "")
const linkThree = new Navbar('<i class="far fa-envelope"></i> Contacto', "contact.html")

const LINKS = [linkOne, linkTwo, linkThree]

let linksWeb = ``