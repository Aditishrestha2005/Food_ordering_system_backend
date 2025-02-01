const Payment = require('../model/Payment');

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const { Order_id, Payment_method, Payment_status, Payment_date } = req.body;

    // Check if the associated order exists
    const order = await Order.findByPk(Order_id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const payment = await Payment.create({
      Order_id,
      Payment_method,
      Payment_status,
      Payment_date,
    });

    res.status(201).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single payment by ID
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a payment
const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { Order_id, Payment_method, Payment_status, Payment_date } = req.body;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Check if the associated order exists
    if (Order_id) {
      const order = await Order.findByPk(Order_id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
    }

    await payment.update({
      Order_id,
      Payment_method,
      Payment_status,
      Payment_date,
    });

    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a payment
const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    await payment.destroy();
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};