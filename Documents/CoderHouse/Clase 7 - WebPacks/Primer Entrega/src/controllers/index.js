import { Router } from "express";
import productRoutes from '../routes/productRoutes'
const router= Router()

router.use('/productos',productRoutes)

export default router