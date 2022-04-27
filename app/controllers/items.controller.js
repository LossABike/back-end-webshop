const mongoose = require('mongoose');
const { BadRequestError } = require("../errors");
const handlePromise = require('../helpers/promise.helpers');
const Items = require('../models/items.model');

exports.findAll = async (req, res, next) => {
    
    const [error, document] = await handlePromise(Items.find());
    
    if (error) {
        return next(new BadRequestError(500, "An error occured while retrieving items"));
    }
    return res.send(document);
};
exports.createItems = async (req, res, next) => {
      
        const items = new Items({
            id: req.body.id,
            code: req.body.code,
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            quantity: req.body.quantity,
            innventoryStatus: req.body.innventoryStatus,
            rating: req.body.rating,
        
           
        });

        const [error, document] = await handlePromise(items.save());
        if (error) {
            return next(new BadRequestError(500, "An error occurred while creating the items"));
        
        }
    return res.send(document);
    
};
exports.deleteItem = async (req, res, next) => {
   
    
    const [error, document] = await handlePromise(Items.findOneAndDelete({id:req.params.id }));

    if (error) {
        return next(new BadRequestError(500, `Could not delete item with id=${req.params.id}`));
    }

    if (!document) {
        return next(new BadRequestError(404, "Item not found"));
    }

    return res.send({message :"Item was deleted successfully"});
};
exports.updateItem = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
        return next(new BadRequestError(400, "Data to update can not be empty"));

    }
    const filter = { id: req.params.id };
    const [error, document] = await handlePromise(
        Items.findOneAndUpdate(filter, req.body, {
            new: true,
        })
    );

    if (error) {
        return next(new BadRequestError(500, `Error updateting item with id=${req.params.id}`));
    }
    if (!document) {
        return next(new BadRequestError(404, `Item not found`));


    }

    return res.send({ message: " Item was updated successfully", });
};