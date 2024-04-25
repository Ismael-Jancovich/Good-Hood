const express = require('express')
const router = express.router
const path = 'productRoutes'
const controllers = require('../controllers/productsControllers')



app.get("/productos" , (resquest,response) =>{
response.render("producto")
})

app.post("/productos" , (resquest,response) =>{
})
