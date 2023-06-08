const express = require('express');
const bodyParser = require('body-parser');
const session= require('express-session');
const cors = require('cors')
const dotenv = require('dotenv').config();
const Stripe = require('stripe');

//local imports
const db = require('./database/db.js');
const app = new express();
const port=4000;
const rout=require('./routes/router');

app.use(bodyParser.json({limit: '10mb'}));
app.use(cors());
app.use(express.json({limit:"10mb"}));
   db()
    .then(result => console.log("Connected to mongodb !!"))
    .catch(err => console.log(err))

 
//Middlewares
app.use(express.urlencoded({extended: false}));



app.use(session({
    secret:'my secret key',
    saveUninitialized:true,
    resave: true
}));

app.use((req,res,next) => {
    res.locals.message=req.session.message;
    delete req.session.message;
    next();
});

//Set template engine
app.set('view engine');

//Base Route
app.use(rout);

// Utilisation de variable d'environnement
console.log("Key Secret : "+process.env.STRIPE_SECRET_KEY)
console.log("Admin email : "+process.env.REACT_APP_ADMIN_EMAIL)

app.listen(port, () => console.log("Listen on port " + port));
