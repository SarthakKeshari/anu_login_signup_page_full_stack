const express = require("express");
const router = express.Router();
const db = require("../dbConnection")
const collection = db.collection("Userdata")

router.post("/", (req, res) => {
  try {
        collection.insertOne(req.body)
        res.status(200).send(true)
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;