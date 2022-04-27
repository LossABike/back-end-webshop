const mongoose = require('mongoose');


const schema =  mongoose.Schema(
    {
        id: { type: String },
        code: { type: String },
        description: { type: String },
        image: { type: String },
        price: { type: Number },
        category: { type: String },
        quantity: { type: Number },
        inventoryStatus :{ type: String },
        rating :{type : Number},
        name: {type : String},
    },
    { timestamp: true }
);


schema.method("toJSON", function () {
    const { _v, ...object } = this.toObject();
    return object;
});


module.exports = mongoose.model("items", schema);