const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nama: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    telp: {
        required: true,
        type: Number
    },
    jeniskelamin: {
        required: true,
        type: String
    },
  
})

module.exports = mongoose.model('user', dataSchema)