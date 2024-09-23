const express = require("express");
const diretorRouter = require("./routes/diretor.js");
const filmeRouter = require("./routes/filme.js");
const produtoraRouter = require("./routes/produtora.js")

const app = express()

app.use(express.json())

app.use("/filme", filmeRouter);
app.use("/produtora", produtoraRouter);
app.use("/diretor", diretorRouter)

const porta = 5000;
app.listen(porta, () => {
    console.log("Server is running.. ");
})