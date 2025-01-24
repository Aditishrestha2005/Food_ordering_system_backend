const User = require('../model/user'); // Ensure this path is correct
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import JWT

exports.registerUser = async (req, res) => {
    try {
        const { username, password, email, phone_number, address } = req.body;

        // Check for required fields
        if (!username || !password || !email) {
            return res.status(400).json({ error: "Username, password, and email are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ where: { Username: username } });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            Username: username,
            Password: hashedPassword,
            Email: email,
            Phone_Number: phone_number,
            Address: address
        });

        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error('Error during user registration:', error); // Enhanced logging
        res.status(500).json({ error: "Something went wrong" });
    }
};
// Login User
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Insert username and password" });
    }

    try {
        const user = await User.findOne({ where: { Username: username } });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid password" });
        }

        const token = jwt.sign(
            { id: user.user_id, username: user.Username },
            "your_jwt_secret_here", // Use a secure secret
            { expiresIn: '24h' }
        );

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};