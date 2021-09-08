import { group } from 'console'

const fs= require('fs')
class carritoRepositories{

    getCarrito=()=>{
        const carritos=fs.readFileSync('src/carritos.json')
        return JSON.parse(carritos)
    }
    writeCarrito=(carrits)=>{
        try{
            fs.promises.writeFile('src/carritos.json',JSON.stringify(carrits))
            return('guardado con exito')
             }
            catch(err){
             return('Error al escribirlo')
             }
    }
}
export default carritoRepositories