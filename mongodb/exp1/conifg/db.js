const mongoose = require('mongoose');


module.exports = function dbConnect() {
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mvc_catalog_experiment5';
mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
};