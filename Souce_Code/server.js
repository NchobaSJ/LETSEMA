const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your React app
}));

// Your routes here
// e.g., app.post('/api/borrowers/register', (req, res) => { ... });

app.listen(8000, () => {
    console.log('Server running on port 8000');
});