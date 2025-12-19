// ========================================
// STARFIELD ANIMATION
// ========================================

// ========================================
// TYPEWRITER EFFECT
// ========================================
const typewriterElement = document.getElementById('typewriter');
const phrases = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Product Designer'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    if (!typewriterElement) return;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// ========================================
// MILKY WAY HERO SWARM
// ========================================
class MilkyWaySwarm {
    constructor() {
        this.canvas = document.getElementById('hero-swarm-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0, active: false };
        this.numParticles = 5000; // Extreme density
        this.angle = 0;

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());

        // Mouse Events
        window.addEventListener('mousemove', (e) => this.handlePointer(e.clientX, e.clientY));

        // Touch Events
        window.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                this.handlePointer(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.handlePointer(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.mouse.active = false;
        });
    }

    handlePointer(x, y) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = x - rect.left;
        this.mouse.y = y - rect.top;
        this.mouse.active = true;
    }

    init() {
        this.resize();
        for (let i = 0; i < this.numParticles; i++) {
            this.particles.push(this.createParticle());
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = this.canvas.parentElement.offsetHeight;
    }

    createParticle() {
        // Spiral galaxy distribution
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.max(this.canvas.width, this.canvas.height) * 0.45;
        return {
            x: this.canvas.width / 2 + Math.cos(angle) * radius,
            y: this.canvas.height / 2 + Math.sin(angle) * (radius * 0.6),
            size: Math.random() * 1.2 + 0.2, // Smaller for extreme density
            angle: angle,
            radius: radius,
            speed: (Math.random() * 0.012) + 0.003,
            color: Math.random() > 0.5 ? '#2DD4BF' : (Math.random() > 0.5 ? '#A78BFA' : '#38BDF8'),
            opacity: Math.random() * 0.5 + 0.1,
            vx: 0,
            vy: 0
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        this.particles.forEach(p => {
            p.angle += p.speed;

            let targetX = centerX + Math.cos(p.angle) * p.radius;
            let targetY = centerY + Math.sin(p.angle) * (p.radius * 0.6);

            if (this.mouse.active) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) { // Larger interaction radius
                    const force = (200 - dist) / 200;
                    targetX -= (dx / dist) * force * 50; // Push particles away
                    targetY -= (dy / dist) * force * 50;
                }
            }

            // Smoothly move towards target
            p.x += (targetX - p.x) * 0.1;
            p.y += (targetY - p.y) * 0.1;

            // Draw particle
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fill();

            // Intermittent glow effect
            if (Math.random() > 0.98) {
                this.ctx.shadowBlur = 10;
                this.ctx.shadowColor = p.color;
                this.ctx.fill();
                this.ctx.shadowBlur = 0;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}


// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    new MilkyWaySwarm();
    setTimeout(type, 1000);

    // Mobile Menu Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            // Prevent scrolling when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
        });

        // Mobile View Switching & Menu Close
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Close menu
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';

                // View Switching for Mobile
                if (window.innerWidth <= 768) {
                    const targetId = link.getAttribute('href');
                    const homeSection = document.getElementById('home');
                    const marqueeSection = document.querySelector('.tech-marquee-section');
                    const allSections = document.querySelectorAll('section');
                    const footer = document.querySelector('.footer');

                    if (targetId === '#home') {
                        // SHOW Landing (Home + Marquee)
                        if (homeSection) homeSection.classList.remove('landing-hidden');
                        if (marqueeSection) marqueeSection.classList.remove('landing-hidden');

                        // HIDE Other Sections
                        allSections.forEach(sec => {
                            if (sec.id !== 'home') sec.classList.remove('section-visible');
                        });
                        if (footer) footer.classList.remove('section-visible');

                        window.scrollTo(0, 0);
                    } else {
                        // HIDE Landing
                        if (homeSection) homeSection.classList.add('landing-hidden');
                        if (marqueeSection) marqueeSection.classList.add('landing-hidden');

                        // HIDE all other sections first (reset)
                        allSections.forEach(sec => {
                            sec.classList.remove('section-visible');
                        });

                        // SHOW Target Section
                        const targetSection = document.querySelector(targetId);
                        if (targetSection) {
                            targetSection.classList.add('section-visible');
                        }

                        // SHOW Footer
                        if (footer) footer.classList.add('section-visible');

                        window.scrollTo(0, 0);
                    }
                }
            });
        });
    }
});

// ========================================
// INTERSECTION OBSERVER FOR SKILLS
// ========================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-row').forEach(row => {
    skillObserver.observe(row);
});
