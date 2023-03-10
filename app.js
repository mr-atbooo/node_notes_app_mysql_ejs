const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const errorsController = require('./controllers/errors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);

app.use(errorsController.error404);

app.listen(4000);
