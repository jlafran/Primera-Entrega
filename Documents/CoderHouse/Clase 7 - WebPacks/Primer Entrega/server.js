const express= require('express')
const app = express()
const PORT= 8080

import routes from './src/controllers/index.js'

app.get('/',(req,res)=>{
    res.send('Server funcionando')
})

app.listen(PORT,()=>{
    console.log(`Server funcionado en puerto ${PORT}`)
})

app.use('/api',routes)