// Smooth scroll to sections
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Smooth transitions when navigating between pages
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            document.body.classList.add('fade-out');
            setTimeout(() => {
                document.body.classList.add('fade-in');
                window.location.href = target;
            }, 500);
        });
    });

    // Form validation
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const minWords = 15;
            
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                e.preventDefault();
                return;
            }

            if (message.split(' ').length < minWords) {
                alert(`Message must be at least ${minWords} words.`);
                e.preventDefault();
                return;
            }
        });
    }
});

