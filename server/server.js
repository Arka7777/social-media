const http = require('http');
const axios = require('axios')
const fs = require('fs')
const mongoose = require('mongoose')
//handle form data 
const multer = require('multer')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
require('dotenv').config()

//middlewares
const { signUpWare } = require('./middlewares/auth')

const upload = multer();

const app = express();
app.use(bodyParser.json())
app.use(cors())


//MODELS
// const Recipe = require('./models/recipeProt')
// const User = require('./models/person')

//Mongodb 
// const db = require('./config/key').MongoURI;

// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => { console.log("mongodb connected ✅") })
//     .catch(err => console.log(err))
//view-engine
app.set('view engine', 'ejs')
// app.post('/api/recipe', async (req, res) => {
//     const { name, color, price } = req.body;
//     console.log(req.body);
//     const recipe = new Recipe({ name, color, price });
//     try {
//         const results = await recipe.save();
//         res.send('Done').status(205)
//         console.log(results)
//     } catch (error) {
//         res.send('fuck you').status(405)
//     }
// })

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/auth/signUp', upload.none(), signUpWare)

app.get('/', (req, res) => {
    res.send('Bara hoye geche')
})


const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`The server is listening on port : ${port}`);
})


