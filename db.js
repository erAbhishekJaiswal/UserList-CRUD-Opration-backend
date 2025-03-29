const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://ironman:Iron42@cluster0.gb5hi4h.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to MongoDB', err);
})

module.exports = mongoose;