const router = require('express').Router();
const Contact = require('../Models/ContactModel');

router
    .route('/')
    .get((req, res) => {
        Contact
            .find()
            .then(response => {
                res.status(200).json(response)
            })
            .catch(err => {
                res.status(500).json({
                    errorMessage: "Contact Info could NOT be retrieved"
                })
            })
    })
    .post((req, res)=> {
        const{ name, email } = req.body;
        const ContactInfo = new Contact({ name, email });

        ContactInfo
            .save()
            .then(response => {
                res.status(201).json({
                    success: "New Contact Information Added", response
                })
            })
            .catch(err => {
                res.status(500).json({
                    errorMessage: "There was an error adding the Contact Info to the Database"
                })
            })
    })

module.exports = router;
