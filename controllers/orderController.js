const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  const { items, totalAmount } = req.body;
  const order = await Order.create({
    user: req.user._id,
    items,
    totalAmount,
    isPaid: false,
  });
  res.status(201).json(order);
};

exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    "items.product"
  );
  res.json(orders);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate("user").populate("items.product");
  res.json(orders);
};
