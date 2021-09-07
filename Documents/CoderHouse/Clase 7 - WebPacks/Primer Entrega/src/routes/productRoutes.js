import productController from '../controllers/productosController'
const express = require("express");
const productRouter = express.Router();

productRouter.get("/:id", productController.getId);
productRouter.post('/',productController.post)
productRouter.put('/:id',productController.replaceId)
productRouter.delete('/:id',productController.deleteId)
productRouter.get("/",productController.getAll)

export default productRouter