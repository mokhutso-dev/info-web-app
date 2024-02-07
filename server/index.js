const express = require('express')

const app = express()
const port = 5000

app.use("/", (req, res) => {
    res.send("server is running")
})
app.listen(port,
    console.log("Server runnin at port 5000") )