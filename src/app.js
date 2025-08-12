const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const supportRoute = require('./routes/support');

app.use(cors());
app.use(express.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.use('/api/support', supportRoute);

// Root route serves index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Use Render's assigned port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Expert System backend running on port ${PORT}`);
});
