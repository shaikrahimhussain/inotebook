const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult}=require('express-validator');

router.post('/',[
    body('name','name should have atleast three characters').isLength({min:3}),
    body('email','Please enter an valid email address').isEmail(),
    body('password','password should have atleast five characters')
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
    res.json({error:'Please enter an unique email address',message:err.message})})
});

module.exports = router;