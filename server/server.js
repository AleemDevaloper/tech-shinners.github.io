const express = require('express')
const app = express()
const router = require('./router/auth-router')
const port = 3000
app.use(express.json());
app.use("/api/auth", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})