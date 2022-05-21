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
    npm: {
        required: true,
        type: Number
    },
    telp: {
        required: true,
        type: Number
    },
    jeniskelamin: {
        required: true,
        type: String
    },
    jurusan: {
        required: true,
        type: String
    },
    
  
})

module.exports = mongoose.model('student', dataSchema)