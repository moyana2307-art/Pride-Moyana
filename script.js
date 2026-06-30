document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Target Hook Setup ---
    // Inject transition listener targets to existing DOM layout elements securely
    const setupAnimationHooks = () => {
        // About items
        document.querySelectorAll('.timeline-item, .edu-card, .matrix-col, .interests-block').forEach((el, idx) => {
            el.classList.add('reveal-on-view');
            if (idx % 2 !== 0) el.classList.add('anim-delay-1');
        });

        // Project Cards
        document.querySelectorAll('#projects .project-card').forEach((el, idx) => {
            el.classList.add('reveal-on-view');
            el.classList.add(`anim-delay-${(idx % 3) + 1}`);
        });

        // Resume Components
        document.querySelectorAll('.resume-section-group').forEach((el, idx) => {
            el.classList.add('reveal-on-view');
            if (idx > 0) el.classList.add('anim-delay-1');
        });
    };
    setupAnimationHooks();


    // --- Intersection Observer for View Transitions ---
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Unobserve if you only want the animation to execute once upon scrolling entry
                revealObserver.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.1, rootMargin: '0px 0px -50px 0px' });


    // --- Core SPA Cinematic View Router Engine ---
    const navLinks = document.querySelectorAll('.nav-menu .nav-link, .spa-route-btn');
    const views = document.querySelectorAll('.spa-view');

    const switchView = (targetId) => {
        const cleanId = targetId.replace('#', '');
        const activeView = document.getElementById(cleanId);

        if (activeView) {
            views.forEach(view => view.classList.remove('view-active'));
            activeView.classList.add('view-active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Sync Nav Item Highlights
            document.querySelectorAll('.nav-menu .nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${cleanId}`);
            });

            // Trigger animation calculations specifically for elements inside the newly visible view
            activeView.querySelectorAll('.reveal-on-view').forEach(el => {
                // If elements are already visible in viewport frame, reveal immediately
                revealObserver.observe(el);
            });
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                switchView(targetId);
                
                const navMenu = document.querySelector('.nav-menu');
                if (navMenu?.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    document.querySelector('.menu-toggle i').className = 'fas fa-bars';
                }
            }
        });
    });

    if (window.location.hash) {
        switchView(window.location.hash);
    } else {
        // Fallback for home view elements initialization
        document.querySelectorAll('#home .reveal-on-view').forEach(el => revealObserver.observe(el));
    }

    // --- Mobile Drawer Interactivity ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.querySelector('i').className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
        });
    }

    // --- Contact Form Logic ---
    const contactForm = document.getElementById('portfolio-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.form-submit');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span>Transmitting...</span> <i class="fas fa-spinner fa-spin"></i>';
            submitBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                submitBtn.innerHTML = '<span>Message Received!</span> <i class="fas fa-check"></i>';
                submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.pointerEvents = 'auto';
                }, 3500);
            }, 1200);
        });
    }
});

document.getElementById('portfolio-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const submitBtn = document.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    try {
        const response = await fetch('http://127.0.0.1:8000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message dropped successfully! I will touch base soon.');
            document.getElementById('portfolio-form').reset();
        } else {
            alert('Something went sideways. Please try again.');
        }
    } catch (error) {
        console.error('Network Error:', error);
        alert('Unable to link with server infrastructure.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `<span>Send Message</span> <i class="fas fa-paper-plane"></i>`;
    }
});

document.getElementById('portfolio-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Collect Input fields
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const submitBtn = document.querySelector('.form-submit');
    const originalBtnText = submitBtn.innerHTML;
    
    // UI Loading state
    submitBtn.disabled = true;
    submitBtn.innerText = "Transmission opening...";

    try {
        const response = await fetch('http://127.0.0.1:8000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('🚀 Message delivered straight to Pride\'s inbox!');
            document.getElementById('portfolio-form').reset();
        } else {
            alert('Server side error: ' + result.detail);
        }
    } catch (error) {
        console.error('Connection failure:', error);
        alert('Could not bridge connection with the Python background server.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
    }
});