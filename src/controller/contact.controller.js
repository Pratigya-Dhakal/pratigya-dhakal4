const nodemailer = require('nodemailer');
const contactValidator = require('../validator/contact.validator');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});
const sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    const validationError = contactValidator.validateContactForm(req.body);
    if (validationError) {
        return res.status(400).json({ success: false, error: validationError });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);

        // Redirect to index.html with a success flag in the query string
        res.redirect('/index.html?emailSent=true');
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Error sending email. Please try again later.' });
    }
};

module.exports = {
    sendEmail,
};
