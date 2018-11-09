const router = require('express').Router();
const Upload = require('../Models/UploadModel');

router
    .route('/')
    .get((req, res) => {
        Upload 
            .find()
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json({
                    errorMessage: "Error Getting Upload Info"
                })
            })
    })
    .post((req, res) => {
        const{ pic } = req.body;
        const UploadInfo = new Upload({ pic })

        UploadInfo
            .save()
            .then(response => {
                res.status(201).json({
                    success: "File Uploaded", response
                })
            })
            .catch(err => {
                res.status(500).json({
                    errorMessage: "There was an error uploading the file to the Database"
                })
            })
    })

module.exports = router;
