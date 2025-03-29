const express = require('express');
const app = express();
const port = 3000;
const config = require('./db');
// const UserModel = require('./models/User');
const authRouter = require('./routes/auth');
const User = require('./routes/users');
const cors = require('cors');


const corsOptions = {
    origin: 'https://user-list-crud-opration-git-main-erabhishekjaiswals-projects.vercel.app/' || 'https://user-list-crud-opration.vercel.app/', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
};
app.use(cors(corsOptions));

// const mongoose = require('mongoose');
// const mongoURL = 'mongodb+srv://ironman:Iron42@cluster0.gb5hi4h.mongodb.net/';
// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true});
// let conection = mongoose.connection
// conection.on('connected',()=>{
//     console.log('Connected to MongoDB');
// })
// conection.on('error',(err)=>{
//     console.log('Error connecting to MongoDB', err);
// })

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});
app.use(express.json());
app.use('/api', authRouter);
app.use('/api', User);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
