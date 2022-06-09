const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

const profiles = require("./profiles.json")
app.get("/profiles", (req, res) => {
    return res.json(profiles);
})

app.get("/profiles/:id", (req, res) => {
    let id = req.params.id;
    return res.json([profiles[id]])
})

app.listen(port, () => console.log("Conectado com sucesso"));