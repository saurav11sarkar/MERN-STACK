const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// middlewares
const logger = async(req,res,next) =>{
  console.log('called', req.host, req.originalUrl);
  next()
}

const verifyToken = async(req, res, next) =>{
  const token = req.cookies?.token;
  console.log('value of token in middleware', token)
  if(!token){
    return res.status(401).send({massage: 'Not authorized'})
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded) => {
    // error
    if(err){
      console.log(err);
      return res.status(401).send({massage: 'unauthorized'})
    }
    // if token is valid then it would be decoded
    console.log('value in the token',decoded)
    req.user = decoded;
    next()
  })
}


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vxgcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const serviceColloction = client.db('carDoctor').collection('services');
    const bookingColloction = client.db('carDoctor').collection('booking');

    // auth releted api
    app.post('/jwt',logger,async(req, res)=>{
      const user = req.body;
      console.log(user);
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'})
      res
      .cookie('token', token, {
        httpOnly: true,
        secure: false,
        // sameSite: 'none'
      })
      .send({success: true})
    })


    // services releted
    app.get('/services',logger,async(req, res)=>{
      const custer = serviceColloction.find()
      const result = await custer.toArray();
      res.send(result)
    })

    app.get('/services/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const options = {
        projection: {title: 1, price: 1, service_id: 1, img: 1}
      }
      const result = await serviceColloction.findOne(query,options);
      res.send(result)
    })
    

    // Booking 
    app.get('/booking',logger,verifyToken, async(req,res)=>{
      // console.log(req.query.email)
      // console.log('tok tok token', req.cookies.token);
      console.log('user in the valid token', req.user);
      if(req.query.email !== req.user.email){
        return res.status(403).send({message: 'forbidden access'})
      }
      let query = {}
      if(req.query?.email){
        query = {email: req.query.email}
      }
      const custer = bookingColloction.find(query);
      const result = await custer.toArray()
      res.send(result)
    })
    app.post('/booking', async(req,res)=>{
      const booking = req.body;
      const result = await bookingColloction.insertOne(booking) 
      res.send(result)
    })

    app.patch('/booking/:id', async(req,res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updateBooking = req.body;
      const updateDoc = {
        $set: {
          status:updateBooking.status
        }
      }
      const result = await bookingColloction.updateOne(filter, updateDoc)
      res.send(result);
    })

    app.delete('/booking/:id', async(req,res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await bookingColloction.deleteOne(query)
      res.send(result);
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req,res)=>{
    res.send('Car Surver is running')
})

app.listen(port, ()=>{
    console.log(`Card doctor is running on port: ${port}`);
})