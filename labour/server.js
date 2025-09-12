const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

// Replace with your provided API key
const API_KEY = "AIzaSyDk1oLx7UvQhAgVzrrqLrQHO7qMAHIwTL0";
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies and enable CORS
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Endpoint to handle the fertilizer scan request
app.post('/scan-fertilizer', async (req, res) => {
    const { imageData } = req.body;

    if (!imageData) {
        return res.status(400).json({ error: 'Image data is required.' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
    const prompt = `Identify the fertilizer name and price from this image. Respond with a simple JSON object containing keys 'fertilizerName' and 'fertilizerPrice'. Example: {"fertilizerName": "Urea", "fertilizerPrice": 500.50}`;

    try {
        const payload = {
            contents: [{
                parts: [
                    { text: prompt },
                    { inlineData: { mimeType: "image/png", data: imageData } }
                ]
            }]
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.error("Error during API call:", error);
        res.status(500).json({ error: 'Failed to communicate with the Gemini API.' });
    }
});

const mongoose = require('mongoose');

// Get the MongoDB connection URI from the environment variables
const dbURI = process.env.MONGO_URI;

if (!dbURI) {
    console.error('MONGO_URI environment variable is not set!');
    process.exit(1); // Exit the process if the URI is missing
}

// Connect to MongoDB
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully!');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});