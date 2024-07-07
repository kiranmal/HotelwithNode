const express= require('express')

const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;


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