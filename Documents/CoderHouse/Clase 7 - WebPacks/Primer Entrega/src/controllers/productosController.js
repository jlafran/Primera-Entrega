import productService from "../Services/productService"
import router from "."
const productosController=(req,res)=>{
    const productos= productService()
    res.send(productos)
}


export default productosController