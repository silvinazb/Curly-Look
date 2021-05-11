class Navbar {
    constructor (nombre, enlace) {
        this.nombre = nombre
        this.enlace = enlace
    }
}

const linkOne = new Navbar('Home', "index.html")
const linkTwo = new Navbar('Nosotros', "")
const linkThree = new Navbar('Tips', "")
const linkFour = new Navbar('Contacto', "contact.html")

const LINKS = [linkOne, linkTwo, linkThree, linkFour]

let linksWeb = ``






// <li class="nav-item active">
// <a class="nav-link" href="#">Home
//   <span class="sr-only">(current)</span>
// </a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="#">Nosotros</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="#">Tips</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="contact.html">Contacto</a>
// </li>