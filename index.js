const express= require('express')

const app=express();
const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/',function(req,res){
    res.send("Hello guys")
})

//route file
const personRouter =require('./router/personRouter');

const menuItemRoutes =require('./router/menuItemRoutes');


app.use('/person',personRouter);

app.use('/menuu',menuItemRoutes);
app.listen(3000,()=>{
    console.log("port is connected");
})