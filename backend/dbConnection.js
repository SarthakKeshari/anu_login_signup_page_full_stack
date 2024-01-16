require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Sarthak:"+process.env.DB_PASSWORD+"@cluster-the-me-manager.pohzhgt.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db = client.db("DB-the-me-manager");

module.exports = db;