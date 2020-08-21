const { get, find, insert } = require('./data-access')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/students', (req, res) => {
  res.send(get('students'))
})

app.get('/students/:id', (req, res) => {
  const student = find('students', Number(req.params.id))
  if (!student) {
    res.statusCode = 404
  }
  res.send(student)
})

app.post('/students', (req, res) => {
  insert('students', req.body)
  res.statusCode = 204
  res.send()
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
