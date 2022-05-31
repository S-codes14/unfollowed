const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    instagram: {
         tag: {type: String},
         followers: []
    },
    github: {
        tag: {type: String},
        followers: []
   },
   twitter: {
        tag: {type: String},
        followers: []
   }
})

module.exports = mongoose.model('Data', dataSchema)