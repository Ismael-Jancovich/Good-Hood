const express = require("express")
const app = express();
const cors = require("cors");
const PORT = 3000
const routerUser = require("./routes/userRoutes")
const routerProduct = require("./routes/productRoutes")
const categoryRouter = require("./routes/categoryRoutes")

app.use(cors());
app.use(express.static("public"))
app.use(express.json());
app.use("/usuario", routerUser);
app.use("/products", routerProduct);
app.use("/categorias", categoryRouter);



app.listen(PORT, () => console.log("listen on port", PORT))