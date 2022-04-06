const express=require('express');
const router= express.Router();
const heroes=require('../service/heroes');

router.get('/',async function(req,res,next){

    try{
        res.json(await heroes.getMultiple(req.query.page));
    }catch(err){
        console.error(`Error al obtener a los heroes`,err.message);
        next(err);
    }
});

router.post('/',async function(req,res,next){
    try{
        res.json(await heroes.create(req.body));
    }catch(err){
        console.error(`Error mientras se creaban los heroes`,
        err.message);
        next(err);
    }
});
router.put('/:id',async function(req,res,next){
    try {
        res.json(await heroes.update(
            req.params.id,req.body))
    } catch (error) {
        console.error(`Error mientras se creaba el heroe`,
        err.message);
        next(err);
    }
});
router.delete('/:id',async function(req,res,next){
    try {
        res.json(await heroes.remove(
            req.params.id));
    } catch (error) {
        console.error(`Error mientras se borraba al heroe`, err.message);
        next(err);    
    }
})

module.exports=router;