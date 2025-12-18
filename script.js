// ========================================
// STARFIELD ANIMATION
// ========================================
class Starfield {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.numStars = 400;

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '0';
        this.canvas.style.pointerEvents = 'none';
        document.body.prepend(this.canvas);
        this.resize();

        for (let i = 0; i < this.numStars; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5,
                opacity: Math.random()
            });
        }
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = '#ffffff';

        this.stars.forEach(star => {
            this.ctx.globalAlpha = star.opacity;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            this.ctx.fill();

            star.y -= star.speed;
            if (star.y < 0) {
                star.y = this.canvas.height;
                star.x = Math.random() * this.canvas.width;
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

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
        this.numParticles = 200; // Denser galaxy
        this.angle = 0;

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouse.x = e.clientX - rect.left;
            this.mouse.y = e.clientY - rect.top;
            this.mouse.active = true;
        });
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
        const radius = Math.random() * Math.max(this.canvas.width, this.canvas.height) * 0.5;
        return {
            x: this.canvas.width / 2 + Math.cos(angle) * radius,
            y: this.canvas.height / 2 + Math.sin(angle) * (radius * 0.6), // Elliptical
            size: Math.random() * 2 + 0.5,
            angle: angle,
            radius: radius,
            speed: (Math.random() * 0.02) + 0.01, // Fast speed
            distanceFromCenter: radius,
            color: Math.random() > 0.4 ? '#2DD4BF' : '#A78BFA',
            opacity: Math.random() * 0.5 + 0.2
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        this.particles.forEach(p => {
            // Update position in spiral
            p.angle += p.speed;

            // Vortex motion
            let targetX = centerX + Math.cos(p.angle) * p.radius;
            let targetY = centerY + Math.sin(p.angle) * (p.radius * 0.6);

            // Subtle mouse turbulence
            if (this.mouse.active) {
                const dx = this.mouse.x - p.x;
                const dy = this.mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    targetX += (dx / dist) * 20;
                    targetY += (dy / dist) * 20;
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
    new Starfield();
    new MilkyWaySwarm();
    setTimeout(type, 1000);
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
