const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

const profiles = require("./src/profiles/profiles.json")
app.get("/profiles", (req, res) => {
    return res.json(profiles);
})

app.listen(port, () => console.log("Conectado com sucesso"));