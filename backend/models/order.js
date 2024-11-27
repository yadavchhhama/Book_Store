const mongoose = require("mongoose")

const order = new mongoose.Schema({
    user: {
        type:mongoose.Types.ObjectId,
        ref: "books"
    },
    book: {
        type:mongoose.Types.ObjectId,
        ref: "books"
    },
    status: {
        type:String,
        default : "Ordered Placed",
        enum : ["Ordered Placed","Out for delivery,Delivered Canceled"]
    },
},
{timestamps : true}
);
module.exports = mongoose.model("order",order);