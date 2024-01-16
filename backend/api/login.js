const express = require("express");
const router = express.Router();
const db = require("../dbConnection")
const collection = db.collection("Userdata")

router.get("/:emailid", (req, res) => {
  try {
    collection.find({emailid: req.params.emailid})
    .toArray().then((results) => {
        if(results.length>0)
          res.status(200).send(true);
        else {
          res.status(200).send(false)
        }
    }).catch((err) => {
      res.status(500).send("Loading data failed");
      console.log(err)
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;