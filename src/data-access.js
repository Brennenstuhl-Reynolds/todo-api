const fs = require('fs')
const filePath = 'src/data.json'

let data = {}

fs.readFile(filePath, (error, content) => {
  if (error) throw error
  data = JSON.parse(content)
})

function getData() {
  return data
}

function getFreshData(onSuccess) {
  fs.readFile(filePath, (error, content) => {
    if (error) throw error
    onSuccess(JSON.parse(content))
  })
}

module.exports = {
  data,
  getData,
  getFreshData
}
