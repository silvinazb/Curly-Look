class Product {
    constructor (nombre, precio, descuento, imagen, categoria) {
        this.nombre = nombre
        this.precio = precio
        this.descuento = descuento
        this.imagen = imagen
        this.categoria = categoria
    }
}
const ProductOne = new Product('Shampoo', 1000, 0.5, "/img/skala4.jpg", "")
const ProductTwo = new Product('Desenredante', 1500, 0.5, "/img/skala5.jpg", "Nutri")
const ProductThree = new Product('Baño de crema', 1500, 0.5, "/img/skala2.png", "Hidra")
const ProductFour = new Product('Crema para peinar', 960, 0.5, "/img/skala4.jpg", "")
const ProductFive = new Product('Gel definidor', 800, 0.5, "/img/skala5.jpg", "Hidra")
const ProductSix = new Product('Combo', 4000, 0.5, "/img/skala2.png", "Nutri")


const PRODUCTOS = [ProductOne, ProductTwo, ProductThree, ProductFour, ProductFive, ProductSix]
