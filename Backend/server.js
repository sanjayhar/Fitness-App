const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Serve frontend files (HTML, CSS) from root folder
app.use(express.static(path.join(__dirname, '..')));

// Example API route
app.get('/api/classes', (req, res) => {
    res.json([
        { id: 1, name: "Strength Training", duration: "45 mins" },
        { id: 2, name: "Cardio Blast", duration: "30 mins" },
        { id: 3, name: "Yoga Flexibility", duration: "60 mins" }
    ]);
});

app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
