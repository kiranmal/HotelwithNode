const express= require('express')

const app=express();
const db=require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

//Middleware
const logRequest =(req,res,next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}

app.use(logRequest);



app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local',{session: false})
app.get('/',function(req,res){
    res.send("Hello guys")
})

//route file
const personRouter =require('./router/personRouter');

const menuItemRoutes =require('./router/menuItemRoutes');


app.use('/person',personRouter);

app.use('/menuu',menuItemRoutes);
app.listen(PORT,()=>{
    console.log("port is connected");
})