const mongoose = require('mongoose');

const url = "mongodb+srv://me5100025:anand9145@cluster0.ytn8qcv.mongodb.net/WebMap?retryWrites=true&w=majority&appName=Cluster0"

// asynchronous function  - returns Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected');    
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;