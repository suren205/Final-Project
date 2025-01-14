document.addEventListener('DOMContentLoaded', () => {
    // Background image slideshow
    const heroSection = document.querySelector('.hero');
    const images = [
        'src/Bagmati Machha Pokhari.jpg',
        'src/bharat taal torist.jpg',
        'src/bharat_tal-1.jpg',
        'src/bharat-taal.jpg',
        'src/first photo.jpg'
    ];
    let currentImageIndex = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url(${images[currentImageIndex]})`;
        heroSection.style.backgroundSize = 'cover';
        heroSection.style.backgroundPosition = 'center';
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    changeBackground(); // Initial call
    setInterval(changeBackground, 5000); // Change every 5 seconds

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ScrollReveal initialization
    ScrollReveal().reveal('.hero-content, .about-content, .gallery-container img, #booking-form, .contact-content', {
        delay: 200,
        distance: '50px',
        origin: 'bottom',
        interval: 200,
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: true
    });


    // Header background change on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-text p, .about-text ul li, .gallery-container img, #booking-form input, #booking-form textarea, .contact-info p');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('fade-in-up');
            } else {
                element.classList.remove('fade-in-up');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Form submission handling
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your booking request! We will get back to you soon.');
        bookingForm.reset();
    });

    // Image gallery modal (simplified version)
    const galleryImages = document.querySelectorAll('.gallery-container img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            modal.style.display = 'flex';
            modal.style.justifyContent = 'center';
            modal.style.alignItems = 'center';
            modal.style.zIndex = '1001';

            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.borderRadius = '10px';
            modalImg.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
            modalImg.style.transition = 'transform 0.3s ease';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });

            // Add zoom effect on hover
            modalImg.addEventListener('mouseenter', () => {
                modalImg.style.transform = 'scale(1.05)';
            });

            modalImg.addEventListener('mouseleave', () => {
                modalImg.style.transform = 'scale(1)';
            });
        });
    });
});


