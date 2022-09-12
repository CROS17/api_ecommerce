const db = require('../models');
const Trademark = db.trademarks;

    module.exports ={
        allTrademark,
        createTrademark,
        oneTrademark,
        updateTrademark,
        deleteTrademark
    };

    async function allTrademark()
    {
        return trademarks = await Trademark.findAll();
    }

    async function createTrademark(data)
    {
        await Trademark.create({
            name: data.name,
            description: data.description
        });
    }

    async function oneTrademark(id)
    {
        return trademark = await Trademark.findByPk(id);
    }

    async function updateTrademark(data){
        await Trademark.update({
            name: data.name,
            description: data.description
        },{
            where: {
                id: data.trademarkId
            },
        });
    }

    async function deleteTrademark(id){
        const trademark = await oneTrademark(id);
        await trademark.destroy();
    }
