const Order = require("./order.model");

const createAOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body); // passing information to the body
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params; // req.params for getting orders by (id, emails etc.). It is used to contain the route parameter
    const orders = await Order.find({ email }).sort({ createdAt: -1 });

    if (!orders) {
      res.status(500).json = { message: "Order not found" };
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching order", error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
};

module.exports = {
  createAOrder,
  getOrderByEmail,
};
