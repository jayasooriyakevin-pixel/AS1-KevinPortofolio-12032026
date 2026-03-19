// ===== HAMBURGER MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            navMenu.classList.toggle('active');
            
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                    const icon = hamburger.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // ===== ACTIVE PAGE HIGHLIGHTING =====
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkPage = link.getAttribute('href');
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    setActivePage();

    // ===== SLIDESHOWS =====
    let heroSlideIndex = 1;
    let visionSlideIndex = 1;
    
    // Hero slideshow
    const heroSlides = document.querySelectorAll('.hero-slideshow .slide');
    if (heroSlides.length > 0) {
        showHeroSlides(heroSlideIndex);
        
        const heroPrev = document.querySelector('.hero-slideshow .slide-prev');
        const heroNext = document.querySelector('.hero-slideshow .slide-next');
        
        if (heroPrev) {
            heroPrev.addEventListener('click', function() {
                changeHeroSlide(-1);
            });
        }
        
        if (heroNext) {
            heroNext.addEventListener('click', function() {
                changeHeroSlide(1);
            });
        }
        
        setInterval(function() {
            changeHeroSlide(1);
        }, 5000);
    }
    
    // Vision slideshow
    const visionSlides = document.querySelectorAll('.vision-slideshow .slide');
    if (visionSlides.length > 0) {
        showVisionSlides(visionSlideIndex);
        
        const visionPrev = document.querySelector('.vision-slideshow .slide-prev');
        const visionNext = document.querySelector('.vision-slideshow .slide-next');
        
        if (visionPrev) {
            visionPrev.addEventListener('click', function() {
                changeVisionSlide(-1);
            });
        }
        
        if (visionNext) {
            visionNext.addEventListener('click', function() {
                changeVisionSlide(1);
            });
        }
        
        setInterval(function() {
            changeVisionSlide(1);
        }, 6000);
    }
    
    function changeHeroSlide(n) {
        showHeroSlides(heroSlideIndex += n);
    }
    
    function showHeroSlides(n) {
        const slides = document.querySelectorAll('.hero-slideshow .slide');
        if (!slides.length) return;
        
        if (n > slides.length) { heroSlideIndex = 1 }
        if (n < 1) { heroSlideIndex = slides.length }
        
        slides.forEach(slide => slide.classList.remove('active'));
        slides[heroSlideIndex - 1].classList.add('active');
    }
    
    function changeVisionSlide(n) {
        showVisionSlides(visionSlideIndex += n);
    }
    
    function showVisionSlides(n) {
        const slides = document.querySelectorAll('.vision-slideshow .slide');
        if (!slides.length) return;
        
        if (n > slides.length) { visionSlideIndex = 1 }
        if (n < 1) { visionSlideIndex = slides.length }
        
        slides.forEach(slide => slide.classList.remove('active'));
        slides[visionSlideIndex - 1].classList.add('active');
    }
});

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name || !email || !message) return;
        
        if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert('Please fill in all fields before sending.');
        } else if (!isValidEmail(email.value)) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        const navMenu = document.getElementById('nav-menu');
        const hamburger = document.getElementById('hamburger');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
        
        if (hamburger) {
            const icon = hamburger.querySelector('i');
            if (icon && icon.classList.contains('fa-times')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
});