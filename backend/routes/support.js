const express = require('express');
const router = express.Router();
const { getSolution } = require('../inference/engine');

router.post('/', (req, res) => {
  const { symptoms } = req.body;
  if (!Array.isArray(symptoms)) {
    return res.status(400).json({ error: 'Symptoms must be an array.' });
  }
  const solution = getSolution(symptoms);
  res.json({ solution });
});

module.exports = router;
