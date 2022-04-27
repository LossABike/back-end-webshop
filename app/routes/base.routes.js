const express = require('express');
const order = require('../controllers/orders.controller');
const items = require('../controllers/items.controller');
const router = express.Router();
const auth = require('../controllers/auth.controller.js');
    
    //create new order
    router.post("/", order.createOrder);
    
    //get all items
    router.get("/items", items.findAll);
    
    //add items
    router.post("/admin/add", items.createItems);
    
    //delete one items
    router.delete("/admin/delete/:id", items.deleteItem);
    
    //update one items
    router.put("/admin/update/:id", items.updateItem);
    
    //auth

    //register
    router.post('/auth/register', auth.register);
    //sign in
    router.post('/auth/signin', auth.sign_in);


module.exports = router;





