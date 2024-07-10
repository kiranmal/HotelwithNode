const express = require('express');
const router = express.Router();

const Person =require('./../models/person');
const {jwtAuthMiddleware,generatetoken} = require('./../jwt');


router.post('/signup',async (req,res)=>{
    try{
        const data= req.body;
    const newPerson =new Person(data);
    const savedPerson=await newPerson.save();
    console.log('data saved');

    const payload={
        id: savedPerson.id,
        username: savedPerson.username
    }
    console.log(JSON.stringify(payload));

    const token= generatetoken(payload);
    console.log("Token is: ",token);


    res.status(200).json({savedPerson: savedPerson,token: token});
   
    }catch(err){
        if (err.code === 11000) { // Duplicate key error
            console.log('Duplicate key error:', err);
            res.status(400).json({ error: 'Duplicate email, this email already exists.' });
        } else {
            console.log('Error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    });


    router.post('/login',async(req,res)=>{
        try{
            const {username,password}= req.body;
            const user= await Person.findOne({username:username});
            if(!username || !(await user.comparePassword(password))){
                return res.status(401).json({error:'Invalid username or password'});
            }

            const payload ={
                id : user.id,
                username:user.username
            }
            const token = generatetoken(payload);
            res.json({token})
        }catch(err){
            console.log(err);
            res.status(500).json({error:'Internal Server Error'})
        }
    })

    router.get('/profile',jwtAuthMiddleware,async(req,res)=>{ try{
        const userData = req.user;
        console.log("user Data : ",userData);
        const userId=userData.id;
        const user = await Person.findById(userId);
        res.status(200).json({user});
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
})
    router.get('/',jwtAuthMiddleware,async (req,res)=>{
        try{
            const data =await Person.find();
            console.log('data fetched');
            res.status(200).json(data);
        }catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })
    
    
    router.get('/:workType',async(req,res)=>{
        try{
            const workType=req.params.workType;
            if(workType =='chef'|| workType =='waiter' || workType == 'manager'){
                const response= await Person.find({work:workType});
                console.log("found");
                res.status(200).json(response);
    
            }else{
                res.status(404).json({error:'Invalid workType'})
            }
        }
        catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
        }
    })
    router.put('/:id',async (req,res)=>{
        try{
            const personId = req.params.id;
            const updatedPersonData =req.body;
            const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
                new:true,
                runValidator:true
            })
            if(!response){
                return res.status(404).json({error:'Person not found'});
            }
            console.log('data saved');
            res.status(200).json(response);
        }
        catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })
    router.delete('/:id',async(req,res)=>{
        try{
            const personId =req.params.id;
            const response = await Person.findByIdAndDelete(personId);
            if(!response){
                return res.status(404).json({error: 'Person not found'});
            }
            console.log('data deleted');
            res.status(200).json({message: 'Person  deleted sucessfully'})
            
        }
        catch(err){
            console.log(err);
            res.status(500).json({error: 'Internal Server Error'});
        }
    })
   
module.exports = router; 

