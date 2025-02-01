const orderdetails = require('../model/orderdetails');

// Create a new order detail
const createorderdetail = async (req, res) => {
  try {
    const { Order_id, Product_id, Quantity, Price } = req.body;

    const orderdetail = await orderdetails.create({
      Order_id,
      Product_id,
      Quantity,
      Price,
    });

    res.status(201).json({ orderdetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all order details
const getallorderdetails = async (req, res) => {
  try {
    const orderdetailsList = await orderdetails.findAll();
    res.status(200).json({ orderdetails: orderdetailsList });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get order details by ID
const getorderdetailbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const orderdetail = await orderdetails.findByPk(id);

    if (!orderdetail) {
      return res.status(404).json({ error: 'Order detail not found' });
    }

    res.status(200).json({ orderdetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an order detail
const updateorderdetail = async (req, res) => {
  try {
    const { id } = req.params;
    const { Order_id, Product_id, Quantity, Price } = req.body;

    const orderdetail = await orderdetails.findByPk(id);

    if (!orderdetail) {
      return res.status(404).json({ error: 'Order detail not found' });
    }

    await orderdetail.update({
      Order_id,
      Product_id,
      Quantity,
      Price,
    });

    res.status(200).json({ orderdetail });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an order detail
const deleteorderdetail = async (req, res) => {
  try {
    const { id } = req.params;
    const orderdetail = await orderdetails.findByPk(id);

    if (!orderdetail) {
      return res.status(404).json({ error: 'Order detail not found' });
    }

    await orderdetail.destroy();
    res.status(200).json({ message: 'Order detail deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createorderdetail,
  getallorderdetails,
  getorderdetailbyid,
  updateorderdetail,
  deleteorderdetail,
};