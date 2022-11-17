const express = require('express');
const router = express.Router();
const Model = require('../model/model');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');

module.exports = router;


//Post Method
router.post('/post',express.json(), async (req, res) => {
    console.log(req.body);
    const data = new Model({
        name: req.body.name,
        city: req.body.city,
        price: req.body.price,
        show: req.body.show,
        seat: req.body.seat
    })

    
    try {
        const dataToSave = data.save();
        console.log(JSON.stringify(data));
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id',express.json(), async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id',express.urlencoded({extended: true}), async (req, res) => {
    
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})