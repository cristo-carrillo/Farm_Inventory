const router = require('express').Router();

const Animal=require('../models/Animal');

router.get('/animals/add',(req,res)=>{
    res.render('animals/new-animals');
});
router.post('/animals/new-animals',async (req,res)=>{
    const {especie,cantidad,valor,fecha}=req.body;
    const errors = [];
    if(!especie){
        errors.push({text: 'Debe insertar el nombre de especie'});
    }
    if(cantidad<=0){
        errors.push({text: 'La cantidad debe ser mayor que 0'});
    }
    if(valor<=0){
        errors.push({text: 'El valor debe ser mayor que 0'})
    }
    if(!fecha){
        errors.push({text: 'Debe insertar la fecha'});
    }
    if(errors.length > 0){
        res.render('animals/new-animals',{
            errors,
            especie,
            cantidad,
            valor,
            fecha
        });
    }else{
        const newAnimal=new Animal({especie,cantidad,valor,fecha});
        await newAnimal.save();
        res.redirect('/animals')
    }
    
});

router.get('/animals',async (req, res)=>{
    const animals = await Animal.find();
    //res.render('animals/all-animales',{animals});
    console.log(animals);
})
module.exports = router;