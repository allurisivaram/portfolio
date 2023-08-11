import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './router'

const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express()

app.use(cors({
    credentials:true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080/') 
})
const MONGODB_URL = "mongodb+srv://homesharecami:HomeShare%40123@clusterhomeshare.4wh7iq4.mongodb.net/?retryWrites=true&w=majority"

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URL);
// mongoose.connection.on("error",(error:Error) => console.log(error));

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URL,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
async function run() {
    try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    }
}
run().catch(console.dir);

app.use('/', router())