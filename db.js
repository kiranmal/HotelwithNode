const mongoose= require('mongoose');
const mongoURL='mongodb://localhost:27017/hotel'
// const mongoURL = 'mongodb+srv://kiranmalpmvk:Querty1234@cluster0.wmqcjfr.mongodb.net/'
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