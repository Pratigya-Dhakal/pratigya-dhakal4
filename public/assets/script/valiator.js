function validateAndSubmit() {
    var form = document.getElementById("contactForm");

    if (form.checkValidity()) {
        form.submit();
    } else {
        setCustomValidationMessages();
    }
}
function setCustomValidationMessages() {
    var formElements = document.getElementById("contactForm").elements;

    for (var i = 0; i < formElements.length; i++) {
        var element = formElements[i];

        if (!element.checkValidity()) {
            element.setCustomValidity(getCustomValidationMessage(element));
        } else {
            element.setCustomValidity('');
        }
    }
}

function getCustomValidationMessage(element) {
    switch (element.id || element.name) {
        case 'name':
            return 'Please enter your name.';
        case 'email':
            return 'Please enter a valid email address.';
        case 'subject':
            return 'Please enter a subject.';
        case 'comment':
            return 'Please enter your message.';
        default:
            return 'Invalid input.';
    }
}
function displayEmailSentAlert() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('emailSent') === 'true') {
        alert('Email sent successfully! Please wait for a response.');
    }
}

window.onload = displayEmailSentAlert;
