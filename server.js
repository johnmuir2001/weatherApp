const express = require("express")
const { main } = require("./app")
const path =require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/weather", async (req, res) => {
    const response = await main(req.query.address)
    res.send(response)
})

app.listen(3005, () => {
    console.log("listening on port 3005")
})