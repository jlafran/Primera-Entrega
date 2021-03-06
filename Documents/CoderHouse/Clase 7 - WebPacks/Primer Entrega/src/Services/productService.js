import productRepositories from "../Repositories/productRepositories"
const productos= new productRepositories()
const getAll=()=>{
    return productos.getProducts()
}
const getId=(id)=>{
    const products=productos.getProducts()
    return products.find((producto)=>producto.id==id)
}
const post=(product)=>{
    const products=productos.getProducts()
    let id=0
    products.map((producto) => {
        if (id < producto.id) {
            id = producto.id
        }
    })
    products.push({
        id: id=id+1,
        producto: product
    })
    return productos.writeProducts(products)

}
const replaceId=(produc,id)=>{
    const products=productos.getProducts()
	products.filter((producto)=>producto.id==id)
        .forEach((producto) => {
            producto.producto.title=produc.title
            producto.producto.price=produc.price
            producto.producto.url=produc.url
		})
    const carga=productos.writeProducts(products)
    return products.find((producto)=>producto.id==id)
}
const deleteId=(id)=>{
    let products=productos.getProducts()
	products=products.filter((producto)=> id!= producto.id)
    return productos.writeProducts(products)
}

export default {
    getAll:getAll,
    getId:getId,
    post:post,
    replaceId:replaceId,
    deleteId:deleteId
}