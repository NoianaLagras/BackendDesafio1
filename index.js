class ProductManager {
    constructor() {
        this.products = [];
        this.idGenerator = 0;
    }


    getProducts() {
        return [...this.products]
    }


    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || isNaN(price) || isNaN(stock) || !thumbnail || !code) {
            console.error("Faltan datos del producto");
            return;
        }


        if (this.products.some(product => product.code === code)) {
            console.error("Ya existe un producto con ese codigo");
            return;
        }

        const newProduct = {
            id: ++this.idGenerator,
            title,
            description,
            price: parseFloat(price),
            thumbnail,
            code,
            stock: parseInt(stock),
        };
        this.products.push(newProduct);
        console.log("Producto Agregado Correctamente", newProduct);
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Not found");
            return null;
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct("producto5", "description1", 12, "probando", 15, 100);
productManager.addProduct("producto6", "description2", 12, "probando", 16, 200);
productManager.addProduct("producto7", "description3", 12, "probando", 17, 300);
productManager.addProduct("producto8", "description4", 12, "probando", 19, 400);

console.log("Lista de productos:", productManager.getProducts());

const productById = productManager.getProductById(4);

console.log("Product by ID:", productById);
