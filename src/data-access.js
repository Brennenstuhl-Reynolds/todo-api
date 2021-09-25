let data = {
	todos: [
		{ 	id: 1, // no due date + finished
			title: 'Einkaufen',
			description: 'Abfallsäcke',
			importance: 5,
			dueDate: '',
			status: 1 ,
			finishedDate: new Date(),
			createdDate: new Date()	},
		{ 	id: 2, // due some time
			title: 'Wäsche waschen',
			description: '60°, 30°',
			importance: 2,
			dueDate: new Date('2021-10-20'),
			status: 1 ,
			finishedDate: null,
			createdDate: new Date()	},
		{ 	id: 3, // due today
			title: 'Wohnung aufräumen',
			description: 'Besuch kommt!',
			importance: 5,
			dueDate: new Date(),
			status: 1 ,
			finishedDate: null,
			createdDate: new Date()	},
		{ 	id: 4, // Overdue
			title: 'Abfall leeren',
			description: 'Recycling zeugs nicht vergessen',
			importance: 4,
			dueDate: new Date('2021-09-01'),
			status: 1 ,
			finishedDate: null,
			createdDate: new Date()	},
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

function $delete(entity, id) {
	const index = data[entity].indexOf(data[entity].find(e => e.id === id))
	data[entity].splice(index, 1)
}

function update(entity, id, row) {
	const index = data[entity].indexOf(data[entity].find(e => e.id === id))
	data[entity][index] = row;
}

module.exports = {
	get,
	find,
	insert,
	delete: $delete,
	update
}
