import productRepositories from "../Repositories/productRepositories"
const productos= new productRepositories()
const productService=()=>{
    return productos.getProducts()
}

export default productService