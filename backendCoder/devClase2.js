// title (nombre del producto)
// description (descripción del producto)
// price (precio)
// thumbnail (ruta de imagen)
// id (código identificador)
// stock (número de piezas disponibles)

// Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
// Todos los campos son obligatorios menos id que debe agregarse automáticamente  y auto- incrementable
// Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento

// Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
// En caso de no coincidir ningún id, mostrar en consola un error “Not found”


class ProductManager {
    constructor() {
        this.products = []
}

    getProducts() {
       console.log(this.products)
       return this.products
    }

    addProduct (title, description, price, thumbnail, id, stock) {
        title = Bondiola
        description = Fiambre
        price = $500
        stock = 50
        thumbnail = "https://www.google.com/imgres?imgurl=https%3A%2F%2Felportaldelchacinado.com%2Fmedia%2FReceta-Bondiola-Casera-El-Portal-del-Chacinado-_i9ng8p.jpg&tbnid=gfh-vYawyK-wWM&vet=12ahUKEwitzp7B5KD-AhU1vJUCHU4VDZMQMygAegUIARDFAQ..i&imgrefurl=https%3A%2F%2Felportaldelchacinado.com%2Freceta-de-bondiola-casera%2F&docid=C3JuK3G7MdIkMM&w=635&h=802&q=bondiola%20fiambre&ved=2ahUKEwitzp7B5KD-AhU1vJUCHU4VDZMQMygAegUIARDFAQ" 
        if (this.products.length===0) {
            id = 1
        } else {
            let lastProduct = this.event [this.events. length-1]
            id = lastEvent.id +1
        }
        this.products.push(product)

    }

    getProductById (event_id) {
        let first = this.products.find(each => each.id === product_id)
        console.log (first)
        return first

    }

}