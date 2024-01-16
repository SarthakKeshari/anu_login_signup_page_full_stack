const express = require("express");
const router = express.Router();
const db = require("../dbConnection")
const collection = db.collection("Medicines")

router.get("/", (req, res) => {
  try {
    collection.find()
    .toArray().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
      res.status(500).send("Loading data failed");
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

router.get("/:name", (req, res) => {
  try {
    collection.find({name: req.params.name})
    .toArray().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
      res.status(500).send("Loading data failed");
      console.log(err)
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.post("/", (req, res) => {
  try {
    collection.find({name: req.body.name}).toArray().then((result) => {
        if(result.length > 0) {
          res.status(201).send("Kindly Update. Since, " + req.body.name + " already exists in your medicine list")
        }
        else{
          collection.insertOne(req.body)
          res.status(200).send(req.body.name + " has been added to your medicine list")
        }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.put("/", (req, res) => {
  try {
    // console.log(req.body)
    collection.find({name: req.body.oldName}).toArray().then((result) => {
        if(result.length > 0) {
          collection.updateOne({name: req.body.oldName},
            {$set: { name: req.body.newName,
                     mfg: req.body.mfg,
                     exp: req.body.exp
              }})
          res.status(200).send("Medicine detail(s) for " + req.body.newName + " has been updated")
        }
        else{
          res.status(201).send("No Data found that matches the provided details")
        }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

router.delete("/:name", (req, res) => {
  try {
    // console.log(req.params.name)
    collection.find({name: req.params.name}).toArray().then((result) => {
        if(result.length > 0) {
          collection.deleteOne({name: req.params.name})
          res.status(200).send(req.params.name+" has been removed from your medicine list")
        }
        else{
          res.status(201).send("No Data found that matches the provided details")
        }
    })
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;