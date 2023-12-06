const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/calculate', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3001/calculate', req.body);
    res.send(`Monthly Payment: ${response.data.monthlyPayment}`);
  } catch (error) {
    res.status(500).send('Error in calculation service');
  }
});

const PORT = 3000;
server = app.listen(PORT, () => {
  console.log(`Main App running on port ${PORT}`);
});

module.exports = { app, server }; // Export the app and server

