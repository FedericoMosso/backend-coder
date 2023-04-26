
const fs = require('fs')

class ProductManager {
    constructor(path) {
        this.products = []     //para guardar en la memoria todos los usuarios
        this.path = path    //para guardar en la memoria la ruta del archivo
        this.init(path)     //para iniciar la instancia y crear el archivo en caso de no existir o cargar la memoria en caso de existir usuarios
    }
    init(path) {
        //verifico si existe el archivo
        let file = fs.existsSync(path)
        //console.log(file)
        if (!file) {
            //si no existe lo creo
            fs.writeFileSync(path,'[]')
            console.log('file created at path: '+this.path)
            return 'file created at path: '+this.path
        } else {
            //si existe cargo los usuarios en la memoria del programa
            this.products = JSON.parse(fs.readFileSync(path,'UTF-8'))
            console.log('data recovered')
            return 'data recovered'
        }
    }

    async add_product({ title, description, price, carts, id, stock }) {
        try {
            //defino el objeto que necesito agregar al array
            let data = { title, description, price, carts, id, stock }
            //si la memoria tiene productos
            if (this.products.length>0) {
                //busco el id del último elemento y le sumo 1
                let next_id = this.products[this.products.length-1].id+1
                //agrego la propiedad al objeto
                data.id = next_id
            } else {
                //en caso que no tenga: asigno el primer id
                data.id = 1
            }
            //agrego el objeto (producto) a la memoria del programa
            this.products.push(data)
            //convierto a texto plano el array
            let data_json = JSON.stringify(this.products,null,2)
            //sobre-escribo el archivo
            await fs.promises.writeFile(this.path,data_json)
            console.log('id´s created products: '+data.id)
            return 'id´s products: '+data.id
        } catch(error) {
            console.log(error)
            return 'addProduct: error'
        }
    }

    getProducts() {
        try {
            if (this.products.length === 0) { 
                console.log("Not found");
            }
            console.log(this.products);
            return this.products;
        } catch (error) {
            console.log(error);
            return "getProduct: Error";
        }
     }

    read_products() {
        //console.log(this.products)
        return this.products
    }
    read_products(id) {
        let one = this.products.find(each=>each.id===id)
        //console.log(one)
        return one
    }
    async update_products(id,data) {
        //data es el objeto con las propiedades que necesito modificar del producto
        try {
            //busco el producto
            let one = this.read_product(id)
            //itero para modificar la propiedad correspondiente
            for (let prop in data) {
                //console.log(prop)
                one[prop] = data[prop]
            }
            //convierto a texto plano el array
            let data_json = JSON.stringify(this.product,null,2)
            //sobre-escribo el archivo
            await fs.promises.writeFile(this.path,data_json)
            console.log('updated product: '+id)
            return 'updated product: '+id
        } catch(error) {
            console.log(error)
            return 'error: updating user'
        }
    }
    async destroy_product(id) {
        try {
            //saco el producto
            this.products = this.products.filter(each=>each.id!==id)
            //console.log(this.products)
            //convierto a texto plano el array
            let data_json = JSON.stringify(this.products,null,2)
            //sobre-escribo el archivo
            await fs.promises.writeFile(this.path,data_json)
            console.log('delete product: '+id)
            return 'delete product: '+id
        } catch(error) {
            console.log(error)
            return 'deleteProduct: error'
        }
    }
}

async function manager() {
    let manager = new ProductManager('./data/products.json')
    await manager.add_product({ title:'bondiola',description:'fiambre',price:500,carts:[] })
    await manager.add_product({ title:'salame',description:'fiambre',price:450,carts:[] })
    await manager.add_product({ title:'jamon crudo',description:'fiambre',price:800,carts:[] })
    await manager.add_product({ title:'jamon cocido',description:'fiambre',price:450,carts:[] })
    await manager.add_product({ title:'lomo ahumado',description:'fiambre',price:550,carts:[] })
    await manager.add_product({ title:'berenjena',description:'escabeche',price:400,carts:[] })
    await manager.add_product({ title:'ciervo',description:'escabeche',price:600,carts:[] })
    await manager.add_product({ title:'pollo',description:'escabeche',price:500,carts:[] })
    await manager.add_product({ title:'ciruela',description:'cmermelada',price:350,carts:[] })
    await manager.add_product({ title:'durazno',description:'mermelada',price:300,carts:[] })
    await manager.getProductById(9)
    await manager.update_product(9,{ title:'damazco' })
    await manager.destroy_product(10)
    await manager.getProducts(1,2,3,4,5,6,7,8,9,10)
}
manager()