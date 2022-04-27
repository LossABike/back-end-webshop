const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    nameUser: {
      type: String,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
    },
    address: {
      type: String,
    },

    items: [
      {
        name: { type: String },
        id: { type: String },
        price: { type: Number },
        qtyAvailable: { type: Number },
        qtyCart: { type: Number },
        category: { type: String },
        image: { type: String },
      },
    ],
  },
  { timestamp: true }
);

schema.method("toJSON", function () {
  const { _v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("orders", schema);
