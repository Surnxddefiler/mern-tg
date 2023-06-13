const { Schema, model } = require('mongoose');
const schema = new Schema({
    admin: Array,
},
    {
        collection: "admin"
    }
)
module.exports = model('admin', schema)