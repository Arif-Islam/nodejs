const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Long Way Ahead!");
});

const users = [
    { id: 1, name: 'Brandon', email: 'lull@gmail.com', phone: '456768970' },
    { id: 2, name: 'Crandon', email: 'lull@gmail.com', phone: '456768970' },
    { id: 3, name: 'Drandon', email: 'lull@gmail.com', phone: '456768970' },
    { id: 4, name: 'Frandon', email: 'lull@gmail.com', phone: '456768970' },
    { id: 5, name: 'Grandon', email: 'lull@gmail.com', phone: '456768970' },
    { id: 6, name: 'Hrandon', email: 'lull@gmail.com', phone: '456768970' }
]

app.get('/users', (req, res) => {
    // filter by search query parameter
    if (req.query.name) {   
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }
    console.log('query', req.query);

});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    res.send(user);
})

app.listen(port, () => {
    console.log("Listening to port ", port);
});


