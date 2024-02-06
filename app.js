require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./src/routes/contact.route');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/contact', contactRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
