class Product {
    constructor (id, nombre, precio, imagen, categoria) {
        this.id  = id
        this.nombre = nombre
        this.precio = precio
        this.imagen = imagen
        this.categoria = categoria
    }
}
const ProductOne = new Product(1, 'Maio', 750, "/img/nutri1.jpg", "Nutri")
const ProductTwo = new Product(2, 'Mais', 750, "/img/nutri2.png", "Nutri")
const ProductThree = new Product(3, 'Coquet', 750, "/img/nutri3.png", "Nutri")
const ProductFour = new Product(4, 'Amido', 500, "/img/hidra1.jpeg", "Hidra")
const ProductFive = new Product(5, 'Potao', 750, "/img/hidra2.jpeg", "Hidra")
const ProductSix = new Product(6, 'Crespos', 700, "/img/re1.jpeg", "Recons")
const ProductSeven = new Product(7, 'Keratina', 890, "/img/re2.jpg", "Recons")

const PRODUCTOS = [
    ProductOne, ProductTwo, ProductThree, ProductFour, ProductFive, ProductSix, ProductSeven]