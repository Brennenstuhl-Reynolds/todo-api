let data = {
  students: [
    { id: 1, name: 'Tobi', version: 1 },
    { id: 2, name: 'Ella', version: 1 },
    { id: 3, name: 'Klaus', version: 1 },
    { id: 4, name: 'Martina', version: 1 }
  ]
}

function get(entity) {
  return data[entity]
}

function find(entity, id) {
  return data[entity].find(e => e.id === id)
}

function insert(entity, row) {
  data[entity].push(row)
}

module.exports = {
  get,
  find,
  insert
}
