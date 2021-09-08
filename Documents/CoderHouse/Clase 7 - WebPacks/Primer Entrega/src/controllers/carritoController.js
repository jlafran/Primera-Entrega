import carritoService from "../Services/carritoService"

const getCarritobyId=(req,res)=>{
    const {id}=req.params
    if (id==''){
        const carrito= carritoService.getAll()
        res.send(carrito)}
    else{
        const carrito= carritoService.getId(id)
        res.send(carrito)}
}
const postCarrito=(req,res)=>{
    const carrito=carritoService.newCarrito()
    res.send(carrito)
}
const postProductoOnCarrito=(req,res)=>{
    const {id}=req.params
    let productoid= req.body
    productoid=productoid.id
    productoid=Number(productoid)
    const product= carritoService.AddProduct(productoid,id)
    res.send(product)
}
const deleteCarrito=(req,res)=>{
    const {id}=req.params
    const carrito= carritoService.deleteCarrito(id)
    res.send(carrito)
}
const deleteProductoOnCarrito=(req,res)=>{
    const {id,id_prod}=req.params
    const carrito= carritoService.deleteProductoOnCarrito(id,id_prod)
    res.send(carrito)
}

export default {
    getCarritobyId:getCarritobyId,
    postCarrito:postCarrito,
    postProductoOnCarrito:postProductoOnCarrito,
    deleteCarrito:deleteCarrito,
    deleteProductoOnCarrito:deleteProductoOnCarrito
}