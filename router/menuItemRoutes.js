const express =require('express');
const router = express.Router();
const menu =require('./../models/MenuItem');




//post method to add a menu item
router.post('/',async(req,res)=>{
    try{
        const data =req.body;
        const newMenu= new menu(data);
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


router.get('/',async (req,res)=>{
    try{
        const data=await menu.find();
        console.log('data fetch');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});


router.get('/:menuType',async(req,res)=>{
    try{
        const menuType=req.params.menuType;
        if(menuType =='sweet'|| menuType =='crunchy' || menuType == 'sour'){
            const response= await menu.find({taste:menuType});
            console.log("found");
            res.status(200).json(response);

        }else{
            res.status(404).json({error:'Not mention'})
        }
    }
    catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'})
    }
})
module.exports = router; 