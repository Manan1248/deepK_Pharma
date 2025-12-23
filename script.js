// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

// Smooth scrolling and active link highlight
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get the target section
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Smooth scroll to section
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Close mobile menu if open
        if (navLinksContainer.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinksContainer.classList.remove('active');
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
});

// ============================================
// MEDICINE FILTER FUNCTIONALITY
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');
const medicineCards = document.querySelectorAll('.medicine-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        
        // Filter medicine cards
        medicineCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease';
            } else {
                const cardCategory = card.getAttribute('data-category');
                if (cardCategory === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            }
        });
    });
});

// ============================================
// ADD TO CART FUNCTIONALITY
// ============================================

const addButtons = document.querySelectorAll('.add-btn');
let cartCount = 0;

addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get medicine name
        const medicineName = button.closest('.medicine-card').querySelector('h3').textContent;
        const price = button.closest('.medicine-card').querySelector('.price').textContent;
        
        // Add to cart effect
        button.style.animation = 'pulse 0.5s ease';
        cartCount++;
        
        // Show notification
        showNotification(`${medicineName} added to cart!`);
        
        // Reset animation
        setTimeout(() => {
            button.style.animation = 'none';
        }, 500);
    });
});

// ============================================
// WHATSAPP ENQUIRY SENDING
// ============================================

function sendToWhatsApp(formData) {
    console.log('Sending to WhatsApp:', formData);
    
    // Format the message with all enquiry details
    const message = `🏥 NEW MEDICINE ENQUIRY 🏥\n\nFull Name: ${formData.full_name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany: ${formData.company || 'Not provided'}\nMedicine Type: ${formData.medicine_type}\nQuantity: ${formData.quantity}\nDetails: ${formData.details || 'Not provided'}\n\nMessage received at ${new Date().toLocaleString()}`;
    
    console.log('Message:', message);
    
    // Your WhatsApp number (9173722950 with country code +91)
    const phoneNumber = '918154997758'; // Full international number without +
    
    // Create WhatsApp API URL - using the correct format
    const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    console.log('WhatsApp URL:', whatsappURL);
    
    // Open WhatsApp - try both web and mobile links
    setTimeout(() => {
        window.open(whatsappURL, '_blank');
    }, 500);
}

// ============================================
// FORM SUBMISSION - WAIT FOR DOM TO LOAD
// ============================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Setting up forms');
    
    const contactForm = document.getElementById('contactForm');
    const enquiryForm = document.getElementById('enquiryForm');
    
    console.log('Contact Form:', contactForm);
    console.log('Enquiry Form:', enquiryForm);
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            console.log('Contact form submitted');
            e.preventDefault();
            e.stopPropagation();
            
            try {
                // Get form data
                const user_name = contactForm.querySelector('input[name="user_name"]').value;
                const user_email = contactForm.querySelector('input[name="user_email"]').value;
                const subject = contactForm.querySelector('input[name="subject"]').value;
                const message = contactForm.querySelector('textarea[name="message"]').value;
                
                console.log('Contact form data:', {user_name, user_email, subject, message});
                
                // Format message for WhatsApp
                const whatsappMessage = `📧 CONTACT MESSAGE 📧\n\nName: ${user_name}\nEmail: ${user_email}\nSubject: ${subject}\nMessage: ${message}\n\nReceived at ${new Date().toLocaleString()}`;
                
                const phoneNumber = '918154997758';
                const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
                
                console.log('Opening WhatsApp:', whatsappURL);
                window.open(whatsappURL, '_blank');
                
                showModal('Sent to WhatsApp!', 'Your message has been sent to our WhatsApp! Our team will respond shortly.');
                setTimeout(() => {
                    contactForm.reset();
                }, 500);
            } catch (error) {
                console.error('Error in contact form:', error);
                showModal('Error', 'Something went wrong. Please try again.');
            }
            
            return false;
        }, true);
    }
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            console.log('Enquiry form submitted');
            e.preventDefault();
            e.stopPropagation();
            
            try {
                // Get form data
                const formData = {
                    full_name: enquiryForm.querySelector('input[name="full_name"]').value,
                    email: enquiryForm.querySelector('input[name="email"]').value,
                    phone: enquiryForm.querySelector('input[name="phone"]').value,
                    company: enquiryForm.querySelector('input[name="company"]').value,
                    medicine_type: enquiryForm.querySelector('select[name="medicine_type"]').value,
                    quantity: enquiryForm.querySelector('input[name="quantity"]').value,
                    details: enquiryForm.querySelector('textarea[name="details"]').value
                };
                
                console.log('Enquiry form data:', formData);
                
                // Validate required fields
                if (!formData.full_name || !formData.email || !formData.phone || !formData.medicine_type || !formData.quantity) {
                    showModal('Error', 'Please fill all required fields');
                    return false;
                }
                
                // Send to WhatsApp
                sendToWhatsApp(formData);
                
                // Show success message
                showModal('Enquiry Sent!', 'Your medicine enquiry has been sent to our WhatsApp. Our team will contact you soon!');
                setTimeout(() => {
                    enquiryForm.reset();
                }, 500);
            } catch (error) {
                console.error('Error in enquiry form:', error);
                showModal('Error', 'Something went wrong. Please try again.');
            }
            
            return false;
        }, true);
    }
});

// ============================================
// MODAL FUNCTIONALITY
// ============================================

const modal = document.getElementById('messageModal');
const closeBtn = document.querySelector('.close');

function showModal(title, message) {
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.service-card, .medicine-card, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
    observer.observe(el);
});

// ============================================
// PARALLAX EFFECT
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    parallaxElements.forEach((el, index) => {
        el.style.transform = `translateY(${scrolled * 0.5}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// SMOOTH PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Add animation to hero section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaBtn = document.querySelector('.cta-btn');
    
    if (heroTitle) {
        heroTitle.style.animation = 'slideUp 0.8s ease';
    }
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'slideUp 0.8s ease 0.2s both';
    }
    if (ctaBtn) {
        ctaBtn.style.animation = 'slideUp 0.8s ease 0.4s both';
    }
});

// ============================================
// UTILITY ANIMATIONS
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Deepak Pharm Chem. All rights reserved.`;
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Alt + H to go home
    if (e.altKey && e.key === 'h') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Alt + C to go to contact
    if (e.altKey && e.key === 'c') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Alt + M to go to medicines
    if (e.altKey && e.key === 'm') {
        document.getElementById('medicines').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================

// Add ARIA labels and roles
document.querySelectorAll('.add-btn').forEach(btn => {
    btn.setAttribute('aria-label', 'Add medicine to cart');
});

document.querySelectorAll('.filter-btn').forEach((btn, index) => {
    btn.setAttribute('aria-label', `Filter medicines by category ${index}`);
});

// Focus management for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.style.outline = 'none';
        document.activeElement.style.outline = '2px solid #0ea5e9';
    }
});

console.log('Deepak Pharm Chem website loaded successfully!');
