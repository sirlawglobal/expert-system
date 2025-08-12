const express = require('express');
const cors = require('cors');
const app = express();
const supportRoute = require('./routes/support');

app.use(cors());
app.use(express.json());
app.use('/api/support', supportRoute);
app.get('/', (req, res) => {
  res.send('Expert System Backend is running on Render 🚀');
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Expert System backend running on port ${PORT}`);
});
