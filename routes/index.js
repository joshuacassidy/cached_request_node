var express = require('express');
var router = express.Router();
const { setup } = require('axios-cache-adapter')


const api = setup({
  baseURL: 'https://api.coingecko.com/api/v3/exchanges',
  cache: {
      maxAge: 3 * 1000
  }
})

router.get('/', async function(req, res, next) {
  let resp = await api.get()
  res.json(resp.data);
});

module.exports = router;
