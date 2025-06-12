// Smooth scroll animation for sections
function observeSections() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll for navigation links
function smoothScrollToSection(targetId) {
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    observeSections();

    // Add scroll animation for introduction section
    const introduction = document.querySelector('.introduction');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.3
    });

    if (introduction) {
        introduction.style.opacity = '0';
        introduction.style.transform = 'translateY(30px)';
        introduction.style.transition = 'all 0.8s ease-out';
        observer.observe(introduction);
    }

    // Add loading states for Flourish embeds
    const flourishEmbeds = document.querySelectorAll('.flourish-embed');
    flourishEmbeds.forEach(embed => {
        embed.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Handle resize events for responsive behavior
window.addEventListener('resize', function() {
    // Recalculate any dynamic sizing if needed
    const containers = document.querySelectorAll('.flourish-container');
    containers.forEach(container => {
        const embed = container.querySelector('.flourish-embed');
        if (window.innerWidth <= 480) {
            embed.style.height = '300px';
        } else if (window.innerWidth <= 768) {
            embed.style.height = '400px';
        } else {
            embed.style.height = '500px';
        }
    });
});