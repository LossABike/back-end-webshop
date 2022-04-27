const mongoose = require('mongoose');
const { BadRequestError } = require("../errors");
const handlePromise = require('../helpers/promise.helpers');
const Order = require('../models/orders.model');


//create and save contact info
exports.createOrder = async (req, res, next) => {
    

    const order = new Order({
        nameUser: req.body.nameUser,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        
        items: req.body.items,
           
    });
    

    const [error, document] = await handlePromise(order.save());
    if (error) {
        return next(new BadRequestError(500, "An error occurred while creating the order"));


    }
    return res.send(document);

}; // done


