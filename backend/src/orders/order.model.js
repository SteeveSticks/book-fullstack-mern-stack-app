const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      city: {
        type: String,
        required: true,
      },
      country: String,
      state: String,
      zipcode: String,
    },
    phone: {
      type: Number,
      required: true,
    },
    productIds: [
      // this grabs the id from the backend in mongodb: in our mongodb we have _id on every book this code grabs it to understand which product is ordered we made a refrence(ref)
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // timestamp helps us track when the order is placed(time)
  }
);

const Order = mongoose.model("Order", orderSchema); // model

module.exports = Order;
