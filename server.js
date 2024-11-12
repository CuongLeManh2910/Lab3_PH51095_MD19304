const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port $(port)`)
});

const uri = 'mongodb+srv://cuonglmph51095:Lemanhcuong2005@cluster0.oskcp.mongodb.net/MD19304';

const mongoose = require('mongoose');

const phoneModel = require('./phoneModel')

app.get('/',  async (req,res) => {
    await mongoose.connect(uri)

    let phones = await phoneModel.find();

    console.log(phones);

    res.send(phones);
})