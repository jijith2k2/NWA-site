// Navigation Bar Section

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.new-hamburger');
    const navMenu = document.querySelector('.new-nav-menu');
    const dropdownToggles = document.querySelectorAll('.new-dropdown-toggle');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Toggle dropdowns in mobile view
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.closest('.new-dropdown');
                const isActive = dropdown.classList.contains('active');
                
                // Close all dropdowns first
                document.querySelectorAll('.new-dropdown').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Open current one if it wasn't active
                if (!isActive) {
                    dropdown.classList.add('active');
                }
            }
        });
    });
    
    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.new-nav-link:not(.new-dropdown-toggle)').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.querySelectorAll('.new-dropdown').forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    });
    
    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 992) {
            if (!e.target.closest('.new-navbar') && !e.target.closest('.new-hamburger')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.querySelectorAll('.new-dropdown').forEach(item => {
                    item.classList.remove('active');
                });
            }
        }
    });
});

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
    
   

document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider-container');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
            const fullscreenImage = document.querySelector('.fullscreen-image');
            const closeBtn = document.querySelector('.close-btn');
            
            let currentIndex = 0;
            let touchStartX = 0;
            let touchEndX = 0;
            let autoSlideInterval;
            
            // Initialize slider
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Go to specific slide
            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
                resetAutoSlide();
            }
            
            // Next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            }
            
            // Previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            }
            
            // Auto slide
            function startAutoSlide() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
            
        

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }
            
            // Fullscreen view
            function openFullscreen(imgSrc) {
                fullscreenImage.src = imgSrc;
                fullscreenOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            function closeFullscreen() {
                fullscreenOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            // Event listeners
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                });
            });
            
            // Touch events for mobile
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                clearInterval(autoSlideInterval);
            }, {passive: true});
            
            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, {passive: true});
            
            function handleSwipe() {
                const diff = touchStartX - touchEndX;
                if (diff > 50) {
                    nextSlide(); // Swipe left
                } else if (diff < -50) {
                    prevSlide(); // Swipe right
                }
            }
            
            // Click to view fullscreen
            slides.forEach(slide => {
                const img = slide.querySelector('img');
                img.addEventListener('click', () => {
                    openFullscreen(img.src);
                });
            });
            
            closeBtn.addEventListener('click', closeFullscreen);
            
            // Close fullscreen when clicking outside image
            fullscreenOverlay.addEventListener('click', (e) => {
                if (e.target === fullscreenOverlay) {
                    closeFullscreen();
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeFullscreen();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    resetAutoSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                    resetAutoSlide();
                }
            });
            
            // Start auto-slide
            startAutoSlide();
        });

//Hero Banner Carousel

        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider-container');
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            const fullscreenOverlay = document.querySelector('.fullscreen-overlay');
            const fullscreenImage = document.querySelector('.fullscreen-image');
            const closeBtn = document.querySelector('.close-btn');
            
            let currentIndex = 0;
            let touchStartX = 0;
            let touchEndX = 0;
            let autoSlideInterval;
            
            // Initialize slider
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Go to specific slide
            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
                resetAutoSlide();
            }
            
            // Next slide
            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            }
            
            // Previous slide
            function prevSlide() {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            }
            
            // Auto slide
            function startAutoSlide() {
                autoSlideInterval = setInterval(nextSlide, 5000);
            }
            
        

            function resetAutoSlide() {
                clearInterval(autoSlideInterval);
                startAutoSlide();
            }
            
            // Fullscreen view
            function openFullscreen(imgSrc) {
                fullscreenImage.src = imgSrc;
                fullscreenOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
            
            function closeFullscreen() {
                fullscreenOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            // Event listeners
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
            
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    goToSlide(index);
                });
            });
            
            // Touch events for mobile
            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                clearInterval(autoSlideInterval);
            }, {passive: true});
            
            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, {passive: true});
            
            function handleSwipe() {
                const diff = touchStartX - touchEndX;
                if (diff > 50) {
                    nextSlide(); // Swipe left
                } else if (diff < -50) {
                    prevSlide(); // Swipe right
                }
            }
            
            // Click to view fullscreen
            slides.forEach(slide => {
                const img = slide.querySelector('img');
                img.addEventListener('click', () => {
                    openFullscreen(img.src);
                });
            });
            
            closeBtn.addEventListener('click', closeFullscreen);
            
            // Close fullscreen when clicking outside image
            fullscreenOverlay.addEventListener('click', (e) => {
                if (e.target === fullscreenOverlay) {
                    closeFullscreen();
                }
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    closeFullscreen();
                } else if (e.key === 'ArrowRight') {
                    nextSlide();
                    resetAutoSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                    resetAutoSlide();
                }
            });
            
            // Start auto-slide
            startAutoSlide();
        });



// Member Section


document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const registerTrigger = document.getElementById('registerTrigger');
    const authModal = document.getElementById('authModal');
    const forgotModal = document.getElementById('forgotModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const closeForgotModal = document.getElementById('closeForgotModal');
    const showLogin = document.getElementById('showLogin');
    const showRegister = document.getElementById('showRegister');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotForm = document.getElementById('forgotForm');
    const forgotPassword = document.getElementById('forgotPassword');
    const backToLogin = document.getElementById('backToLogin');
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
    const loginPassword = document.getElementById('loginPassword');
    const registerPassword = document.getElementById('registerPassword');
    const successMessage = document.getElementById('successMessage');
    
    // Show registration modal
    registerTrigger.addEventListener('click', function(e) {
      e.preventDefault();
      authModal.style.display = 'flex';
      showRegisterForm();
    });
    
    // Close modals
    closeAuthModal.addEventListener('click', function() {
      authModal.style.display = 'none';
      resetForms();
    });
    
    closeForgotModal.addEventListener('click', function() {
      forgotModal.style.display = 'none';
    });
    
    // Toggle between login and register forms
    showLogin.addEventListener('click', function(e) {
      e.preventDefault();
      showLoginForm();
    });
    
    showRegister.addEventListener('click', function(e) {
      e.preventDefault();
      showRegisterForm();
    });
    
    // Forgot password flow
    forgotPassword.addEventListener('click', function(e) {
      e.preventDefault();
      authModal.style.display = 'none';
      forgotModal.style.display = 'flex';
    });
    
    backToLogin.addEventListener('click', function(e) {
      e.preventDefault();
      forgotModal.style.display = 'none';
      authModal.style.display = 'flex';
      showLoginForm();
    });
    
    // Toggle password visibility
    toggleLoginPassword.addEventListener('click', function() {
      togglePasswordVisibility(loginPassword, toggleLoginPassword);
    });
    
    toggleRegisterPassword.addEventListener('click', function() {
      togglePasswordVisibility(registerPassword, toggleRegisterPassword);
    });
    
    // Form submissions
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleLogin();
    });
    
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleRegistration();
    });
    
    forgotForm.addEventListener('submit', function(e) {
      e.preventDefault();
      handleForgotPassword();
    });
    
    // Functions
    function showLoginForm() {
      document.querySelector('.signin-active').classList.remove('signin-active');
      document.querySelector('.signup-active').classList.remove('signup-active');
      document.querySelector('.signin-inactive').classList.add('signin-active');
      document.querySelector('.signup-inactive').classList.add('signup-inactive');
      
      document.querySelector('.auth-signin').style.opacity = '1';
      document.querySelector('.auth-signin').style.left = '0';
      document.querySelector('.auth-signup').style.opacity = '0';
      document.querySelector('.auth-signup').style.left = '430px';
    }
    
    function showRegisterForm() {
      document.querySelector('.signin-active').classList.remove('signin-active');
      document.querySelector('.signup-active').classList.remove('signup-active');
      document.querySelector('.signin-inactive').classList.add('signin-active');
      document.querySelector('.signup-inactive').classList.add('signup-active');
      
      document.querySelector('.auth-signin').style.opacity = '0';
      document.querySelector('.auth-signin').style.left = '-430px';
      document.querySelector('.auth-signup').style.opacity = '1';
      document.querySelector('.auth-signup').style.left = '0';
    }
    
    function togglePasswordVisibility(passwordField, toggleIcon) {
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
      } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
      }
    }
    
    function resetForms() {
      loginForm.reset();
      registerForm.reset();
      forgotForm.reset();
      
      // Reset success message
      successMessage.style.opacity = '0';
      document.getElementById('check').classList.remove('checked');
      
      // Show login form by default when reopening
      showLoginForm();
    }
    
    function handleLogin() {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Basic validation
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }
      
      // Here you would typically make an AJAX call to your backend
      console.log('Login attempt with:', { email, password, rememberMe });
      
      // Simulate successful login
      setTimeout(() => {
        alert('Login successful! (This is a demo)');
        authModal.style.display = 'none';
        resetForms();
      }, 1000);
    }
    
    function handleRegistration() {
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('registerConfirm').value;
      
      // Basic validation
      if (!name || !email || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
      }
      
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      
      if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return;
      }
      
      // Here you would typically make an AJAX call to your backend
      console.log('Registration attempt with:', { name, email, password });
      
      // Show success animation
      successMessage.style.opacity = '1';
      document.getElementById('check').classList.add('checked');
      
      // Simulate successful registration
      setTimeout(() => {
        authModal.style.display = 'none';
        resetForms();
      }, 3000);
    }
    
    function handleForgotPassword() {
      const email = document.getElementById('forgotEmail').value;
      
      if (!email) {
        alert('Please enter your email');
        return;
      }
      
      // Here you would typically make an AJAX call to your backend
      console.log('Password reset requested for:', email);
      
      // Simulate successful request
      setTimeout(() => {
        alert('Password reset link sent to your email (This is a demo)');
        forgotModal.style.display = 'none';
        forgotForm.reset();
      }, 1000);
    }
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

// Update these functions in your frontend JS:
async function handleSignup(formData) {
    try {
        const response = await fetch('http://localhost:3000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Signup failed');
        }

        // Save token to localStorage
        localStorage.setItem('authToken', data.token);
        alert('Signup successful!');
        window.location.href = '/dashboard.html'; // Redirect after signup
    } catch (error) {
        alert(error.message);
    }
}

async function handleLogin(formData) {
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Login failed');
        }

        // Save token to localStorage
        localStorage.setItem('authToken', data.token);
        alert('Login successful!');
        window.location.href = '/dashboard.html'; // Redirect after login
    } catch (error) {
        alert(error.message);
    }
}




// For signup form
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    await handleSignup(formData);
});

// For login form
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = {
        email: document.getElementById('loginEmail').value,
        password: document.getElementById('loginPassword').value
    };
    await handleLogin(formData);
});