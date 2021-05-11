class Product {
    constructor (nombre, precio, descuento, imagen) {
        this.nombre = nombre
        this.precio = precio
        this.descuento = descuento
        this.imagen = imagen
    }
}

const ProductOne = new Product('Shampoo', 1000, 1, "/img/skala.png")
const ProductTwo = new Product('Desenredante', 1500, 1, "/img/skala.png")
const ProductThree = new Product('Baño de crema', 1500, 1, "/img/skala.png")
const ProductFour = new Product('Crema para peinar', 960, 1, "/img/skala.png")
const ProductFive = new Product('Gel definidor', 800, 0.8, "/img/skala.png")
const ProductSix = new Product('Combo', 4000, 1, "/img/skala.png")

const PRODUCTOS = [ProductOne, ProductTwo, ProductThree, ProductFour, ProductFive, ProductSix]
