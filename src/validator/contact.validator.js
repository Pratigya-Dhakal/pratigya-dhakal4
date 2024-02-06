const validateContactForm = ({ name, email, subject, message }) => {
    if (!name || !email || !subject || !message) {
        return 'All fields are required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Invalid email address.';
    }

    if (!subject.trim()) {
        return 'Subject cannot be empty.';
    }

    if (!message.trim()) {
        return 'Message cannot be empty.';
    }


    return null;
};

module.exports = {
    validateContactForm,
};
