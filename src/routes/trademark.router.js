const express = require('express');
const router = express.Router();

const {
    allTrademark,
    createTrademark,
    oneTrademark,
    updateTrademark,
    deleteTrademark
} = require('../services/trademark.service');

    // Retrieve Trademarks
    router.get('/', async(req, res, next) =>{
        try
        {
            const trademarks =  await allTrademark()
            res.json(trademarks);
        }catch (error) {
            next(error);
        }
    });

    //create a new Trademark
    router.post('/', async(req, res, next) =>{
        try
        {
            const data ={
                name: req.body.trademarks.name,
                description: req.body.trademarks.description
            }
            const newTrademark = await createTrademark(data);
            res.json(newTrademark);
        }catch (error) {
            next(error);
        }
    });

    // Retrieve a single trademark with id
    router.param('trademarkId', async(req, res, next, trademarkId) => {
        try
        {
            const trademark = await oneTrademark(trademarkId);
            req.trademark = trademark;
            next();
        }catch(error) {
            next(error);
        }
    });
    router.get('/:trademarkId', async(req,res,next) =>{
        try
        {
            res.status(200).json({trademark: req.trademark});
        }catch(error) {
            next(error);
        }
    })

    //Update trademark where id
    router.put('/:trademarkId', async(req, res, next)=>{
            try {
                const data = {
                    trademarkId: req.params.trademarkId,
                    name: req.body.trademarks.name,
                    description: req.body.trademarks.description,
                }
                const editTrademark = await updateTrademark(data)
                    .then(()=>{
                        return oneTrademark(data.trademarkId);
                    });
                res.json({editTrademark: editTrademark});
            } catch (error) {
                next(error);
            }
        }
    );

    //delete a trademark
    router.delete('/:trademarkId',async(req,res,next)=>{
        try
        {
            const trademarkId = req.params.trademarkId;
            const response = await deleteTrademark(trademarkId);
            return res.sendStatus(204);
        }catch(error) {
            next(error);
        }
    });

module.exports = router;