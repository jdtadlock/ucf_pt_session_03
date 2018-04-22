const router = require('express').Router();

// localhost:5000/api/test

router.get('/test', (req, res) => {
  res.send({message: 'Success!'});
});


module.exports = router;