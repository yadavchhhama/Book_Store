const mongoose = require("mongoose")

const order = new mongoose.Schema({
    user: {
        type:mongoose.Types.ObjectId,
        ref: "books"
    }
})