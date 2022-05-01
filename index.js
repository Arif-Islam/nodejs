const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// user: arif
// password: m4KEzLs4RczfBvd5

const uri = "mongodb+srv://arif:m4KEzLs4RczfBvd5@cluster0.djuxn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db("foodExpress").collection("users");

        // get user
        app.get('/user', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        })


        app.get('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.findOne(query);
            res.send(result);
        })

        // update user
        app.put('/user/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                },
            };
            const result = await userCollection.updateOne(filter, updateDoc, options);
            res.send(result);
        })

        // POST user: add new user from client side information
        app.post('/user', async (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            const result = await userCollection.insertOne(newUser);
            res.send(result);
        })

        // delete user
        app.delete('/user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })
    }
    finally {
        // await client.close();
    }
}

run().catch(console.dir);


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

// app.get('/user/:id', (req, res) => {
//     console.log(req.params);
//     const id = parseInt(req.params.id);
//     const user = users.find(u => u.id === id);
//     res.send(user);
// });

// app.post('/user', (req, res) => {
//     console.log('request', req.body);
//     const user = req.body;
//     user.id = users.length + 1;
//     res.send(user);
// })

app.listen(port, () => {
    console.log("Listening to port ", port);
});


