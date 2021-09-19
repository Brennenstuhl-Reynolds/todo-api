const { get, find, insert, update, delete: $delete } = require('./data-access')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

app.get('/api/todos', (req, res) => {
	res.send(get('todos'))
})

app.get('/api/todos/:id', (req, res) => {
	const student = find('todos', Number(req.params.id))
	if (!student) {
		res.statusCode = 404
	}
	res.send(student)
})

app.post('/api/todos', (req, res) => {
	insert('todos', req.body)
	res.statusCode = 204
	res.send()
})

app.put('/api/todos/:id', (req, res) => {
	const student = find('todos', Number(req.params.id))
	if (!student) {
		res.statusCode = 404
	}
	update('todos', Number(req.params.id), req.body)
	res.statusCode = 204
	res.send()
})

app.delete('/api/todos/:id', (req, res) => {
	const student = find('todos', Number(req.params.id))
	if (!student) {
		res.statusCode = 404
	}
	$delete('todos', Number(req.params.id))
	res.statusCode = 204
	res.send()
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
