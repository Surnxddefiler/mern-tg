const { Schema, model } = require('mongoose');
const schema = new Schema({
    group: String,
    schedule: {
        Monday: [{ course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }],
        Tuesday: [{ course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }],
        Wednesday: [{ course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }],
        Thursday: [{ course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }],
        Friday: [{ course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }, { course: String, room: String, teacher: String }]
    }
},
    {
        collection: "bobosnus"
    }
)
module.exports = model('bobosnus', schema)