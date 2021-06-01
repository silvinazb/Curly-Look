class Product {
    constructor (id, nombre, precio, descuento, imagen, categoria) {
        this.id  = id
        this.nombre = nombre
        this.precio = precio
        this.descuento = descuento
        this.imagen = imagen
        this.categoria = categoria
    }
}
const ProductOne = new Product(1, 'Shampoo', 1000, 0.5, "/img/skala4.jpg", "")
const ProductTwo = new Product(2, 'Desenredante', 1500, 0.5, "/img/skala5.jpg", "Nutri")
const ProductThree = new Product(3, 'Baño de crema', 1500, 0.5, "/img/skala2.png", "Hidra")
const ProductFour = new Product(4, 'Crema para peinar', 960, 0.5, "/img/skala4.jpg", "")
const ProductFive = new Product(5, 'Gel definidor', 800, 0.5, "/img/skala5.jpg", "Hidra")
const ProductSix = new Product(6, 'Combo', 4000, 0.5, "/img/skala2.png", "Nutri")


const PRODUCTOS = [ProductOne, ProductTwo, ProductThree, ProductFour, ProductFive, ProductSix]
