var express = require('express');
var app = express();

var bearRouter = require('./routes/bears_routes');

app.use('/api', bearRouter);

app.listen(3000, function() {
  console.log('server up');
});
