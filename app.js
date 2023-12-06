const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/calculate', async (req, res) => {
  try {
    // Replace 'localhost' with the service name or container name of your calculation service.
    // For example, if your calculation service container's name is 'calculation-service', use:
    const response = await axios.post('http://mortgage-calculator:3001/calculate', req.body);
    res.send(`Monthly Payment: ${response.data.monthlyPayment}`);
  } catch (error) {
    console.error('Error: ', error.message);  // Log the error for debugging
    res.status(500).send('Error in calculation service');
  }
});

const PORT = 3000;
server = app.listen(PORT, () => {
  console.log(`Main App running on port ${PORT}`);
});

module.exports = { app, server }; // Export the app and server

