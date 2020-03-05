const express = require("express")
const { main } = require("./app")
const path =require('path')

const app = express()
const port = process.env.PORT || 3005

app.use(express.static(path.join(__dirname, "public")))

app.get("/weather", async (req, res) => {
    const response = await main(req.query.address)
    res.send(response)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})