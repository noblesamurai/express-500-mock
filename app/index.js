var express = require('express'),
    app = express();

app.get('*', function(req, res) {
  res.status(500).send('<html><body>Bah!  No, bad!</body></html>');
});

// start up the app if called directly from node
if (require.main === module) {
  app.listen(3000, function () {
    console.log('Listening on port 3000.');
  });
} else {
  module.exports = app;
}
