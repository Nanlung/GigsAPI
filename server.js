const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Database
const db = require('./config/db.config')
db.sync();

// Test Db connection

try {
  db.authenticate();
  console.log('Database connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


app.get('/', (req, res) => res.send("Index path"));

app.use('/gigs', require('./routes/gigs.routes'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
