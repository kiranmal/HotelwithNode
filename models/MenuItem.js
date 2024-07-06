const mongoose=require('mongoose');
const menuItemSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    taste:{
        type:String,
        enum:['sweet','sour','crunchy'],
        require:true,
    },
    is_drink:{
        type:Boolean,
        required:false,
    },
    ingredient:{
        type:String,
        defult:[]
    },
    num_sales:{
        type:Number,
        default:0
    }
});
const menu = mongoose.model('menu',menuItemSchema);
module.exports = menu;