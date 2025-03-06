const express = require('express');
const cors = require("cors");
const fs = require('fs');

const app = express();
const PORT = 5001;
app.use(cors());

const getStateRates = (state) => {
  const data = fs.readFileSync('./stateRates.json');
  const rates = JSON.parse(data);
  return rates[state];
};

const getMortgageRates = (term) => {
    const data = fs.readFileSync('./mortgageRates.json');
    const rates = JSON.parse(data);
    return rates[term];
  };

// Get insurance and property tax rates for given state
app.get('/api/stateRates/:state', (req, res) => {
  const state = req.params.state.toUpperCase();
  const rates = getStateRates(state);
  if (rates) {
    res.json(rates);
  } else {
    res.status(404).send('State not found');
  }
});

// Get mortgage rate for given term
app.get('/api/mortgageRates/:term', (req, res) => {
    const term = req.params.term;
    const rates = getMortgageRates(term);
    if (rates) {
      res.json(rates);
    } else {
      res.status(404).send('Term not found');
    }
  });

app.get('/', (req, res) => {
  res.send('Home Purchase Calculator API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});