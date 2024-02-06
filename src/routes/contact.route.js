const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact.controller');

router.post('/send-email', contactController.sendEmail);

module.exports = router;
