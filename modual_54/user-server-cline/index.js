const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'saurav', email: 'saurav@gmail.com' },
    { id: 2, name: 'sarkar', email: 'sarkar@gmail.com' },
    { id: 3, name: 'oliva', email: 'oliva@gmail.com' },
];

app.get('/', (req, res) => {
    res.send("User Management server is Running");
});

app.get('/users', (req, res) => {
    res.json(users); 
});

app.post('/users', (req, res) => {
    console.log('POST API called');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser); 
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
