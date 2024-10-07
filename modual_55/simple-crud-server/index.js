const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const uri = "mongodb+srv://sarkarjyoti212:olKvu8xoiHI606XB@cluster0.vxgcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() { 
  try {
    await client.connect();
    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    // GET router
    app.get('/users', async (req,res)=>{
        const cursor = userCollection.find()
        const result = await cursor.toArray()
        res.send(result)
    })

    app.get('/users/:id', async (req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const user = await userCollection.findOne(query);
      res.send(user);
    })

    

    // POST route to add a new user
    app.post('/users', async (req, res) => {
      const user = req.body;
      console.log('New user', user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // PUT 
    app.put('/users/:id', async (req, res)=>{
      const id = req.params.id;
      const user = req.body;
      console.log(id,user);
      const filter = {_id: new ObjectId(id)}
      const options = {upsert: true}
      const updateUser = {
        $set:{
          name: user.name,
          email: user.email
        }
      }
      const result = await userCollection.updateOne(filter,updateUser,options)
      res.send(result);
    })

    // DELETED
    app.delete('/users/:id',async (req,res)=>{
        const id = req.params.id
        console.log('please delete from database', id);
        const query = {_id: new ObjectId(id) }
        const result = await userCollection.deleteOne(query);
        res.send(result)
    })

    // Ping MongoDB to confirm successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the function to establish the database connection
connectDB();

// Default route
app.get('/', (req, res) => {
  res.send('Simple CRUD is running');
});

// Start the server
app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT: ${port}`);
});
