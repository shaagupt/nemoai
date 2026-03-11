"use client";

import { useEffect, useRef } from "react";

interface Orb {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  opacity: number;
  opacityDirection: number;
  opacitySpeed: number;
}

const COLORS = [
  "6, 182, 212",   // cyan
  "20, 184, 166",  // teal
  "59, 130, 246",  // blue
  "139, 92, 246",  // purple
  "217, 70, 239",  // magenta
];

export default function BioluminescentOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs: Orb[] = Array.from({ length: 15 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 80 + 30,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.3 + 0.1,
      opacityDirection: Math.random() > 0.5 ? 1 : -1,
      opacitySpeed: Math.random() * 0.003 + 0.001,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const orb of orbs) {
        // Move
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        // Pulse opacity
        orb.opacity += orb.opacityDirection * orb.opacitySpeed;
        if (orb.opacity >= 0.4) {
          orb.opacity = 0.4;
          orb.opacityDirection = -1;
        }
        if (orb.opacity <= 0.05) {
          orb.opacity = 0.05;
          orb.opacityDirection = 1;
        }

        // Draw glow
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius
        );
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.opacity})`);
        gradient.addColorStop(0.5, `rgba(${orb.color}, ${orb.opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
