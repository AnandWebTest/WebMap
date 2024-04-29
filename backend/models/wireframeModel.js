const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    user: { type: Types.ObjectId, ref: 'user' },
    title: { type: String },
    blocks: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('wireframe', mySchema);