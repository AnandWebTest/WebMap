const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    url: { type: String, require: true },
    user: { type: Types.ObjectId, ref: 'user' },
    json: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('sitemap', mySchema);