// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

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

// Certification Modal
const certModal = document.getElementById('certModal');
const closeModal = document.querySelector('.close-modal');
const modalBody = document.getElementById('modal-body');

// Certification data
const certifications = {
    'diploma': {
        title: 'Diploma in Information Technology',
        subtitle: 'Software Development',
        issuer: 'South Africa',
        date: 'Graduated 2024',
        description: 'Completed a comprehensive diploma program focused on software development, covering key areas such as web development, database design, software engineering principles, and project management. Specialized in ASP.NET MVC, C#, SQL Server, and full-stack development methodologies.',
        skills: ['ASP.NET MVC', 'C# Programming', 'SQL Server', 'JavaScript', 'HTML/CSS', 'Software Engineering', 'Project Management'],
        image: 'attachments/Capture.png'
    },
    'oracle-ai': {
        title: 'Oracle AI Database Certified Professional',
        subtitle: 'AI & Database Management',
        issuer: 'Oracle',
        date: 'October 2025',
        description: 'Certified in Oracle AI Database technologies, covering artificial intelligence integration with database systems, machine learning algorithms for data analysis, and optimization of database performance using AI techniques.',
        skills: ['Oracle Database', 'AI Integration', 'Machine Learning', 'Data Analysis', 'Database Optimization', 'Predictive Modeling'],
        image: 'attachments/Oracle.png'
    },
    'cybersecurity': {
        title: 'Introduction to Cybersecurity',
        subtitle: 'Security Fundamentals',
        issuer: 'Cisco',
        date: 'October 2022',
        description: 'Completed Cisco\'s Introduction to Cybersecurity course, covering essential security concepts, threats, vulnerabilities, and defense mechanisms. Gained understanding of cybersecurity principles and best practices for protecting digital assets.',
        skills: ['Security Fundamentals', 'Threat Analysis', 'Risk Management', 'Network Security', 'Security Policies', 'Incident Response'],
        image: ' attachments/cybersecurity.png'
    },
    'ccna': {
        title: 'CCNAv7: Introduction To Networks',
        subtitle: 'Networking Fundamentals',
        issuer: 'Cisco',
        date: 'February 2023',
        description: 'Completed Cisco CCNAv7: Introduction to Networks course, covering networking fundamentals, TCP/IP protocols, network infrastructure, and basic network security concepts. Hands-on experience with network configuration and troubleshooting.',
        skills: ['Networking Fundamentals', 'TCP/IP Protocols', 'Network Configuration', 'Troubleshooting', 'Routing & Switching', 'Network Security'],
        image: 'attachments/Networks.png'
    }
};

// Function to view certification details
function viewCertification(certId) {
    const cert = certifications[certId];
    if (!cert) return;
    
    modalBody.innerHTML = `
        <div class="certification-detail">
            <h3>${cert.title}</h3>
            <div class="cert-meta">
                <p><strong>${cert.subtitle}</strong></p>
                <p>Issued by: ${cert.issuer}</p>
                <p>Date: ${cert.date}</p>
            </div>
            <div class="cert-description">
                <p>${cert.description}</p>
            </div>
            <div class="cert-skills">
                <h4>Skills & Technologies:</h4>
                <div class="skills-list">
                    ${cert.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
                </div>
            </div>
            <img src="${cert.image}" alt="${cert.title}" class="cert-image">
        </div>
    `;
    
    certModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal when clicking the X
closeModal.addEventListener('click', () => {
    certModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === certModal) {
        certModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formDataObj = Object.fromEntries(formData.entries());
    
    // Basic validation
    if (!formDataObj.name || !formDataObj.email || !formDataObj.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navigation');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.project-card, .cert-card, .contact-card').forEach(el => {
    observer.observe(el);
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .cert-card, .contact-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .project-card.animated, .cert-card.animated, .contact-card.animated {
        opacity: 1;
        transform: translateY(0);
    }
    
    .skill-badge {
        display: inline-block;
        background: var(--bg-light);
        color: var(--primary-color);
        padding: 8px 16px;
        border-radius: 20px;
        margin: 5px;
        font-size: 0.9rem;
    }
    
    .skills-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin: 20px 0;
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
 // Add hover effect to project images
    document.querySelectorAll('.project-image').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
});