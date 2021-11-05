const router = require('express').Router();


router.get('/animals/add',(req,res)=>{
    res.render('animals/new-animals');
});
router.get('/animals',(req, res)=>{
    res.send('Animals from database');
})
module.exports = router;