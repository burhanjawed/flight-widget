const PORT = 8000;
const express = require('express');
const app = express();
const axios = require('axios').default;
const cors = require('cors');
require('dotenv').config();

// CORS
app.use(cors());

// GET all departures
app.get('/flights', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://toronto-pearson-airport.p.rapidapi.com/departures',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': 'toronto-pearson-airport.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(PORT, () => console.log('Server running on Port: ' + PORT));
