const express = require("express");
const app = express();
const login = require("./api/login");
const register = require("./api/register");
const cors = require("cors")

// const db = require("./dbConnection");
require('dotenv').config();

app.use(express.json({ extended: false }));

app.use(cors({ origin: true, credentials: true }));
app.use("/api/login", login);
app.use("/api/register", register);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));