const fs= require('fs')
class productRepositories{

    getProducts=()=>{
        const productos=fs.readFileSync('src/productos.json')
        return JSON.parse(productos)
    }
    writeProducts=(products)=>{
        try{
            fs.promises.writeFile('src/productos.json',JSON.stringify(products))
            console.log('guardado con exito')
            return products
        }
        catch(err){
            console.log('Error al escribirlo')
        }
    }
}
export default productRepositories