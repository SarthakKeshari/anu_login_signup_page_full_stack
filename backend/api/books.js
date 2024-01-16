const express = require("express");
const router = express.Router();
const db = require("../dbConnection")
const collection = db.collection("Books")

router.get("/", (req, res) => {
  try {
    collection.find()
    .toArray().then((results) => {
        res.send(results);
    }).catch((err) => {
      console.log(err)
    });

    // OR 
    
    // Not-recommended - lot of overhead is involved in looping
    // const response = []
    // const cursor = db.collection("Medicines").find()
    // await cursor.forEach((document) => {
    //   response.push(document);
    // });
    // res.send(response)
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.post("/", (req, res) => {
  try {
    collection.find({bookname: req.body.bookname}).toArray().then((result) => {
        if(result.length > 0) {
          res.status(200).send("Kindly Update. Data already exists")
        }
        else{
          collection.insertOne(req.body)
          res.status(200).send("Data Inserted")
        }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.put("/", (req, res) => {
  try {
    console.log(req.body)
    collection.find({bookname: req.body.bookname}).toArray().then((result) => {
        if(result.length > 0) {
          collection.updateOne({name: req.body.name},
            {$set: { bookname: req.body.bookname,
                     authorname: req.body.authorname,
                     readby: req.body.readby,
              }})
          res.status(200).send("Data Updated")
        }
        else{
          res.status(200).send("No Data found that matches the provided details")
        }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;