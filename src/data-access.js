const { v4: uuidv4 } = require('uuid');

let data = {
    todos: [
        {
            id: 'c0b69d59-5f39-4a9e-8b9b-efb61e598762', // no due date + finished
            title: 'Einkaufen',
            description: 'Abfallsäcke',
            importance: 5,
            dueDate: '',
            status: 1,
            finishedDate: new Date(),
            createdDate: new Date(),
        },
        {
            id: '80862eab-dff7-4cfe-81e5-873a1786ec37', // due some time
            title: 'Wäsche waschen',
            description: '60°, 30°',
            importance: 2,
            dueDate: new Date('2021-11-10'),
            status: 1,
            finishedDate: null,
            createdDate: new Date(),
        },
        {
            id: 'a3e2811c-53e2-4e91-8e64-20424f98a46e', // due today
            title: 'Wohnung aufräumen',
            description: 'Besuch kommt!',
            importance: 5,
            dueDate: new Date(),
            status: 1,
            finishedDate: null,
            createdDate: new Date(),
        },
        {
            id: 'f5117531-67d4-4d65-86fc-4958c35b17dc', // Overdue
            title: 'Abfall leeren',
            description: 'Recycling zeugs nicht vergessen',
            importance: 4,
            dueDate: new Date('2021-09-01'),
            status: 1,
            finishedDate: null,
            createdDate: new Date(),
        },
    ],
};

function get(entity) {
    return data[entity];
}

function find(entity, id) {
    return data[entity].find(e => e.id === id);
}

function insert(entity, row) {
    row.id = uuidv4();
    data[entity].push(row);
    return row;
}

function $delete(entity, id) {
    const index = data[entity].indexOf(data[entity].find(e => e.id === id));
    data[entity].splice(index, 1);
}

function update(entity, id, row) {
    const index = data[entity].indexOf(data[entity].find(e => e.id === id));
    data[entity][index] = row;
    return data[entity][index];
}

module.exports = {
    get,
    find,
    insert,
    delete: $delete,
    update,
};
