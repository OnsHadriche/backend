const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

// in routes/items.js

const { getAllItems } = require('../controllers/items')

router.get('/', getAllItems);
app.use((req, res) => {
    res.json({ message: "Hello from Express" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});