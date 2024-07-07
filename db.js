const mongoose= require('mongoose');
require('dotenv').config();


// const mongoURL='mongodb://localhost:27017/hotel'
const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
const db= mongoose.connection;
db.on('connected', () =>{
    console.log('connect to md server')
});
db.on('error',()=>{
    console.log('error is part');
});
db.on('disconnected',()=>{
    console.log('no connect');
});
module.exports=db;