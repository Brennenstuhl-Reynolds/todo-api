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
	const student = find('todos', req.params.id)
	if (!student) {
		res.statusCode = 404
	}
	res.send(student)
})

app.post('/api/todos', (req, res) => {

	if(!req.body.title) {
		res.statusCode = 400;
		res.send();
		return;
	}

	const inserted = insert('todos', req.body)
	res.statusCode = 204
	res.send(inserted)
})

app.put('/api/todos/:id', (req, res) => {
	const student = find('todos', req.params.id)
	if (!student) {
		res.statusCode = 404;
		res.send();
		return;
	}

	if(!req.body.title) {
		res.statusCode = 400;
		res.send();
		return;
	}

	const updated = update('todos', req.params.id, req.body)
	res.statusCode = 200
	res.send(updated)
})

app.delete('/api/todos/:id', (req, res) => {
	const student = find('todos', req.params.id)
	if (!student) {
		res.statusCode = 404
	}
	$delete('todos', req.params.id)
	res.statusCode = 204
	res.send()
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
