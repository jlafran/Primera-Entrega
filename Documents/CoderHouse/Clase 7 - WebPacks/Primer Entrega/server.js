const express= require('express')
const app = express()
const PORT= 8080

import productRouter from './src/routes/productRoutes'
import carritoRouter from './src/routes/carritoRoutes'

app.use(express.json())
app.use(express.urlencoded({extend:true}))

app.get('/',(req,res)=>{
    res.send('Server funcionando')
})

app.listen(PORT,()=>{
    console.log(`Server funcionado en puerto ${PORT}`)
})

app.use('/productos',productRouter)
app.use('/carritos',carritoRouter)