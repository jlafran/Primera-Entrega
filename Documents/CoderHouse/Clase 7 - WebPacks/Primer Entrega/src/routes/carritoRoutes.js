import carritoController from '../controllers/carritoController'
const express = require("express");
const carritoRouter = express.Router();

carritoRouter.get("/:id/productos", carritoController.getCarritobyId);
carritoRouter.post("/", carritoController.postCarrito);
carritoRouter.post("/:id/productos", carritoController.postProductoOnCarrito);
carritoRouter.delete("/:id",carritoController.deleteCarrito)
carritoRouter.delete("/:id/productos/:id_prod",carritoController.deleteProductoOnCarrito)

export default carritoRouter