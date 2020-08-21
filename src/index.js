const { data, getData, getFreshData } = require('./data-access')
const express = require('express')
const app = express()
const port = 3000

app.get('/students', (req, res) => {
  const fresh = req.query['fresh'] != undefined

  if (fresh) {
    getFreshData(data => {
      res.send(data)
    })
  } else {
    res.send(getData())
  }
})

app.get('/non-closure-students', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
