import { Router } from "express";

import productosController from './productosController'
const router= Router()

router.use('/productos',productosController)

export default router