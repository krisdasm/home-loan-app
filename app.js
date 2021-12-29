const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express();

const loanRouter = require('./routes/loan-router')
app.use(cors());
app.use(bodyParser.json());

//Middleware- Can be used for authentication
app.use('/loan', loanRouter);

//routes
app.get('/', (req, res) => {
    res.send("Happy learning")
})


//connect to DB
mongoose.connect(process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }, () => {
        console.log('connected to DB!!')
    })

//listen
app.listen(3000);