
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/first-service', (req, res) => {
  res.send(`<h1>First service at ${port}</h1>`)
})

app.listen(port, () => {
  console.log(`listening at port ${port}`)
})
