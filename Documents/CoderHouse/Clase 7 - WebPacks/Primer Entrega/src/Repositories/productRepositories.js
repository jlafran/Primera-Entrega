const fs= require('fs')
class productRepositories{

    getProducts=()=>{
        const productos=fs.readFileSync('src/productos.json')
        return JSON.parse(productos)
    }
    writeProducts=(products)=>{
        try{
       fs.promises.writeFile('src/productos.json',JSON.stringify(products))
       return('guardado con exito')
        }
       catch(err){
        return('Error al escribirlo')
        }
    }
}
export default productRepositories