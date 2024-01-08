var express = require('express');
var router = express.Router();

// Timestamp Microservice
// Timestamp Microservice
router.get('/timestamp/:date_string?', (req, res) => {
  let input = req.params.date_string;
  let date;

  if (!input) {
    // If no input is provided, use the current date
    date = new Date();
  } else {
    // Check if the input is a valid timestamp (numeric)
    if (/^\d+$/.test(input)) {
      date = new Date(parseInt(input));
    } else {
      // If not a timestamp, try to parse it as a date string
      date = new Date(input);
    }
  }

  if (isNaN(date.getTime())) {
    // If the provided input is invalid, respond with an error
    res.json({ error: 'Invalid Date' });
  } else {
    // Respond with the timestamp in milliseconds and a formatted date
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});


module.exports = router;
