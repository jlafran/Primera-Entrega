const fs= require('fs')
class productRepositories{

    getProducts=()=>{
        const productos=fs.readFileSync('src/productos.json')
        return JSON.parse(productos)
    }
}
export default productRepositories