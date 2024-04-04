const express = require("express")
const rotas   = express.Router()


let celulares = [
    {"celular":"Iphone 15", "desc":"Celular custa 10 mil"},
    {"celular":"Samsung S23", "desc":"Celular custa 3 mil"},
    {"celular":"Xiaomi 4", "desc":"Celular custa 1 mil"},
]

rotas.get("/", (req, res) =>{
    res.json({ola: "Seja bem vindo a nossa loja"})
})

rotas.get("/:celularId", (req, res) => {
    const celular = req.params.celularId
    const celularI = celulares.find(i => i.celular == celular) //i = poderia ser qualquer coisa
    if(!celular){
        res.status(404).json({erro: "Celular não encontrado", celularPesquisado: celular})
    }else{
        res.status(200).json(celularI)
    }
})

module.express = rotas