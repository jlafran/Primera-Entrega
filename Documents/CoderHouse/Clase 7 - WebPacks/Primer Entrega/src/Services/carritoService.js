import carritoRepositories from "../Repositories/carritoRepositories"
import productService from "./productService"
const carritos= new carritoRepositories()
const getAll=()=>{
    return carritos.getCarrito()
}
const getId=(id)=>{
    const carrits=carritos.getCarrito()
    return carrits.find((carrito)=>carrito.id==id)
}
const newCarrito=()=>{
    const carrits=carritos.getCarrito()
    let id=0
    carrits.map((carrito) => {
        if (id < carrito.id) {
            id = carrito.id
        }
    })
    carrits.push({
        id: id=id+1,
        productos: []
    })
    return carritos.writeCarrito(carrits)
}
const AddProduct=(productoid,id)=>{
    let carrits=carritos.getCarrito()
    let carrito=carrits.find((carrito)=>carrito.id==id)
    carrito= Addnewproduct(carrito,productoid)
    if (carrito.length==0){
        return 'Ya existe'
    }
    else{
        carrits=carrits.filter((carrits)=> id!= carrits.id)
        carrits.push({
            id: id,
            productos: carrito
        })
        return carritos.writeCarrito(carrits)
    }
}
const Addnewproduct=(carrito,productoid)=>{
    carrito=carrito.productos
    const prod=carrito.filter((producto)=> productoid== producto.id)
    if (prod.length==0){
        carrito.push(productService.getId(productoid))

        return carrito
    }
    else{
        return null
    }
}
const deleteCarrito=(id)=>{
    let carrits=carritos.getCarrito()
    carrits=carrits.filter((carrits)=> id!= carrits.id)
    return carritos.writeCarrito(carrits)
}
const deleteProductoOnCarrito=(id,productoid)=>{
    let carrits=carritos.getCarrito()
    let carrito=carrits.find((carrito)=>carrito.id==id)
    carrito= deleteProduct(carrito,productoid)
    carrits=carrits.filter((carrits)=> id!= carrits.id)
    console.log(carrits);
    carrits.push({
        id: id,
        productos: carrito
    })
    return carritos.writeCarrito(carrits)
}
const deleteProduct=(carrito,productoid)=>{
    carrito=carrito.productos
    return carrito.filter((producto)=> productoid!= producto.id)
}
export default {
    getAll:getAll,
    getId:getId,
    newCarrito:newCarrito,
    AddProduct:AddProduct,
    deleteCarrito:deleteCarrito,
    deleteProductoOnCarrito:deleteProductoOnCarrito
}