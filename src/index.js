const data = require('./data')
const express = require('express')
const app = express()
const port = 3000

app.get('/students', (req, res) => {
  res.send(data.students)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
