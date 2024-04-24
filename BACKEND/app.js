const express = require("express")
const app = express();
const PORT = 3000
const path = require("path")
const fs = require("fs")
const users = require("./database/users.json");


app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/registro" , (resquest,response) =>{
    response.render("register")
})

app.post("/nuevo-usuario" , (request,response) =>{   
    const user = request.body
    if (users.some(u => u.nombre === user.nombre)) {
    response.send("Nombre de usuario ya esta en uso")
    } else {
        users.push(user)
        fs.writeFileSync(path.join(__dirname, "/database/users.json") , JSON.stringify(users)) 
        response.render("newUser" , {user})
}

    console.log(users)
   
})



app.get("/productos" , (resquest,response) =>{
response.render("producto")
})

app.post("/productos" , (resquest,response) =>{
    fs.writeFileSync(path.join(__dirname, "/database/productos.json") , JSON.stringify(users)) 
})




app.listen(PORT, () => console.log("listen on port", PORT))




