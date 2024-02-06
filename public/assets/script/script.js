const texts = ['Software Engineer', 'Software Developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('animated-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}

type();

document.addEventListener('DOMContentLoaded', function () {
    var slider = $(".slider");
    var cards = document.querySelectorAll('.card');
    var cardWidth = cards[0].offsetWidth;
    var index = 0;

    function showCard() {
        cards.forEach(function (card, i) {
        var distance = i - index;
        var transformValue = 'translateX(' + (distance * cardWidth) + 'px)';
        card.style.transform = transformValue;
        });
    }

    function nextCard() {
        if (window.innerWidth > 767) {
            index = (index + 3) % cards.length;
            showCard();
        }
    }

    setInterval(nextCard, 2000);


    slider.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        margin: 0,
        responsive: {
            768: {
                items: 3
            }
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-section');

    gsap.from('#about', {
        opacity: 0,
        x: -60,
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });

    // Animation for the Projects section (coming from the right)
    gsap.from('#projects', {
        opacity: 0,
        x: 50,
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });

    // Animation for the Skills section (coming from the top)
    gsap.from('#skills', {
        opacity: 0,
        y: -60,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });

    // Animation for the Contact section (coming from the bottom)
    gsap.from('#contact', {
        opacity: 0,
        y: 60,
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
        },
    });
});

function downloadCv() {
    var fileName = 'PratigyaDhakalCV.pdf';
    var pdfPath = '/assets/images/' + fileName;

    var downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
