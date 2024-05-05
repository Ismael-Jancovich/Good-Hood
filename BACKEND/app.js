const express = require("express")
const app = express();
const PORT = 3000
const router = require("./routes/userRoutes")

app.use(express.static("public"))
app.use(express.json());
app.use("/nuevo-usuario", router);


    





app.listen(PORT, () => console.log("listen on port", PORT))