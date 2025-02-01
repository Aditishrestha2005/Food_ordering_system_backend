const Restaurant = require('../model/restaurant');

// Create a new restaurant
const createRestaurant = async (req, res) => {
  try {
    const { Name, Address, Contact_Number } = req.body;

    // Check if required fields are provided
    if (!Name || !Address || !Contact_Number) {
      return res.status(400).json({ error: 'Name, Address, and Contact Number are required' });
    }

    const restaurant = await Restaurant.create({
      Name,
      Address,
      Contact_Number,
    });

    res.status(201).json({ restaurant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.status(200).json({ restaurants });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    res.status(200).json({ restaurant });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a restaurant
const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const { Name, Address, Contact_Number } = req.body;

    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    await restaurant.update({
      Name,
      Address,
      Contact_Number,
    });

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a restaurant
const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }

    await restaurant.destroy();
    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};