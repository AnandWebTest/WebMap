const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post("/authenticate", (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
          if(result){
            res.status(200).json(result);
          }else{
            res.status(401).json({message: "invalid credentials"})
          }
           
        }).catch((err) => {
            res.status(500).json(err);
        })
})

router.get('/getall', (req, res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

router.get('/update', (req, res) => {
    res.send('post update response');
})
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
     res.status(200).json(result);
    }).catch((err) => {
     res.status(500).json(err);
    });
 });

// getall
// update
// delete

module.exports = router;