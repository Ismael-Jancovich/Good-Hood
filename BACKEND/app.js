const express = require("express")
const app = express();
const PORT = 3000

app.use(express.static("public"))
app.use(express.json());
app.use("/nuevo-usuario", require("./routes/userRoutes"));
app.listen(PORT, () => console.log("listen on port", PORT))