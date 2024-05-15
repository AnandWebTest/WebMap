const { Schema, model } = require('../connection');

const mySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, require: true , unique: true},
    avatar: {type: String, default: 'avatar_placeholder.png'},
    password: String,
    address:String,
    role: { type: Number, default: 0 },
    createdAt: Date,
});

module.exports = model( 'user', mySchema );