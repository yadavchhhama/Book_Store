const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
const user = request("./router/user");
app.use("/api/v1", user);

const PORT = 3000; // Changed to 3000
app.listen(process.env.PORT, () => {
    console.log(`Server Started on port ${process.env.PORT}`);
});
