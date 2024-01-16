const express = require("express");
const app = express();
const medicine = require("./api/medicines");
const book = require("./api/books");
const finnace = require("./api/finance");
const wardrobe = require("./api/wardrobe");
const cors = require("cors")

// const db = require("./dbConnection");
require('dotenv').config();

app.use(express.json({ extended: false }));
// console.log(db.collection("Medicines").insertOne({ item: "tea", qty: 10 } ))

app.use(cors({ origin: true, credentials: true }));
app.use("/api/medicine", medicine);
app.use("/api/book", book);
// app.use("/api/finance", finnace);
// app.use("/api/wardrobe", wardrobe);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));