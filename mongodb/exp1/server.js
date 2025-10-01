require('dotenv').config();
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const productRoutes = require('./routes/productRoutes');
const dbConnect = require('./conifg/db');


const app = express();
const PORT = process.env.PORT || 3000;


// DB
dbConnect();


// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Public
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


// Routes
app.use('/', productRoutes);


// 404
app.use((req, res) => {
res.status(404).render('404', { url: req.originalUrl });
});


app.listen(PORT, () => console.log(`Ser)ver running on http://localhost:${PORT}`));