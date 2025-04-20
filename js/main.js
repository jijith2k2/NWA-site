


document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    
// Mobile dropdown toggle
document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});
    
    
    
// Auto-scrolling news carousel
document.addEventListener('DOMContentLoaded', function() {
    const scroller = document.querySelector('.media-scroller');
    const cards = document.querySelectorAll('.media-card');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    let currentIndex = 0;
    let autoScrollInterval;

    // Auto-scroll function
    function startAutoScroll() {
        autoScrollInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            smoothScrollToCard(currentIndex);
        }, 2000); // Change slide every 2 seconds
    }

    // Smooth scroll to specific card
    function smoothScrollToCard(index) {
        const card = cards[index];
        scroller.scrollTo({
            left: card.offsetLeft - scroller.offsetLeft,
            behavior: 'smooth'
        });
        currentIndex = index;
    }

    // Manual scroll controls
    scrollLeftBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        smoothScrollToCard(currentIndex);
        startAutoScroll();
    });

    scrollRightBtn.addEventListener('click', () => {
        clearInterval(autoScrollInterval);
        currentIndex = (currentIndex + 1) % cards.length;
        smoothScrollToCard(currentIndex);
        startAutoScroll();
    });

    
    // Pause on hover
    scroller.addEventListener('mouseenter', () => {
        clearInterval(autoScrollInterval);
    });

    scroller.addEventListener('mouseleave', () => {
        startAutoScroll();
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    scroller.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(autoScrollInterval);
    }, {passive: true});

    scroller.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoScroll();
    }, {passive: true});

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            currentIndex = (currentIndex + 1) % cards.length;
        } else if (touchEndX > touchStartX + 50) {
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        }
        smoothScrollToCard(currentIndex);
    }

    // Initialize
    startAutoScroll();
});

    // Learn More Button Expansion
    const learnMoreBtn = document.querySelector('.learn-more');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', () => {
            const moreContent = document.querySelector('.more-content');
            moreContent.classList.toggle('show');
            
            const icon = learnMoreBtn.querySelector('i');
            if (moreContent.classList.contains('show')) {
                learnMoreBtn.textContent = 'Show Less ';
                icon.className = 'fas fa-arrow-up';
                learnMoreBtn.appendChild(icon);
            } else {
                learnMoreBtn.textContent = 'Learn More ';
                icon.className = 'fas fa-arrow-down';
                learnMoreBtn.appendChild(icon);
            }
        });
    }
    
// Store news items for gallery page
const newsItems = [
    {
        image: "./images/news.jpeg",
        title: "Investment in Community Development",
        link: "#"
    },
    {
        image: "./images/newss/WhatsApp Image 2025-04-09 at 11.00.58 AM.jpeg",
        title: "Start at Surat",
        link: "#"
    },
    // Add all other news items in the same format
    {
        image: "./images/newss/WhatsApp Image 2025-04-09 at 11.01.02 AM.jpeg",
        title: "Networking Welfare in Yercaud 15th Consultative Meeting",
        link: "#"
    }
];

// Save to localStorage when main page loads
localStorage.setItem('nwaNewsItems', JSON.stringify(newsItems));

// More News button functionality
document.querySelector('.more-news button').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = "news-gallery.html";
});

    // Character Counter for Contact Form
    const messageInput = document.getElementById('message');
    if (messageInput) {
        messageInput.addEventListener('input', () => {
            const charCount = document.getElementById('char-count');
            charCount.textContent = messageInput.value.length;
            
            if (messageInput.value.length > 500) {
                charCount.style.color = 'red';
            } else {
                charCount.style.color = 'inherit';
            }
        });
    }
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending <span class="loading"></span>';
            
            // Simulate form submission
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    this.reset();
                    document.getElementById('char-count').textContent = '0';
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input');
            input.value = '';
            input.placeholder = 'Thanks for subscribing!';
            setTimeout(() => {
                input.placeholder = 'Your email address';
            }, 3000);
        });
    }
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section-title, .approach-card, .involved-card, .event-card, .media-card').forEach(element => {
        observer.observe(element);
    });
});