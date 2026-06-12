'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  angle: number;
  radius: number;
  speed: number;
  color: string;
  opacity: number;
}

export default function MilkyWaySwarm() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particles: Particle[] = [];
    const mouse = { x: 0, y: 0, active: false };
    const numParticles = 5000; // Extreme density

    const resize = () => {
      canvas.width = window.innerWidth;
      const parent = canvas.parentElement;
      canvas.height = parent ? parent.offsetHeight : window.innerHeight;
    };

    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * Math.max(canvas.width, canvas.height) * 0.45;
      return {
        x: canvas.width / 2 + Math.cos(angle) * radius,
        y: canvas.height / 2 + Math.sin(angle) * (radius * 0.6),
        size: Math.random() * 1.2 + 0.2, // Smaller for extreme density
        angle: angle,
        radius: radius,
        speed: (Math.random() * 0.012) + 0.003,
        color: Math.random() > 0.5 ? '#2DD4BF' : (Math.random() > 0.5 ? '#A78BFA' : '#38BDF8'),
        opacity: Math.random() * 0.5 + 0.1,
      };
    };

    const handlePointer = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.active = true;
    };

    // Initialize
    resize();
    for (let i = 0; i < numParticles; i++) {
      particles.push(createParticle());
    }

    const handleResize = () => {
      resize();
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointer(e.clientX, e.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointer(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      particles.forEach((p) => {
        p.angle += p.speed;

        let targetX = centerX + Math.cos(p.angle) * p.radius;
        let targetY = centerY + Math.sin(p.angle) * (p.radius * 0.6);

        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            targetX -= (dx / dist) * force * 50;
            targetY -= (dy / dist) * force * 50;
          }
        }

        // Smoothly move towards target
        p.x += (targetX - p.x) * 0.1;
        p.y += (targetY - p.y) * 0.1;

        // Draw particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Intermittent glow effect
        if (Math.random() > 0.98) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas id="hero-swarm-canvas" ref={canvasRef} />;
}
