const mongoose = require('mongoose');

const UploadSchema = new mongoose.Schema({
    pic: {type: File, required: true }
});

const UploadModel = mongoose.model('Upload', UploadSchema);

module.exports = UploadModel;