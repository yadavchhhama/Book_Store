const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");

app.get("/", (req, res) => {
    res.send("hello from");
});

const PORT = 3000; // Changed to 3000
app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}`);
});
