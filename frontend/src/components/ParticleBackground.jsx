import { useEffect, useRef } from 'react';

class Blob {
  constructor(canvas) {
    this.canvas = canvas;
    this.reset();
  }
  reset() {
    this.size = Math.random() * (this.canvas.width * 0.4) + (this.canvas.width * 0.2);
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    const colors = ['rgba(0, 243, 255, 0.08)', 'rgba(123, 47, 255, 0.06)', 'rgba(255, 45, 120, 0.05)'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < -this.size) this.x = this.canvas.width + this.size;
    if (this.x > this.canvas.width + this.size) this.x = -this.size;
    if (this.y < -this.size) this.y = this.canvas.height + this.size;
    if (this.y > this.canvas.height + this.size) this.y = -this.size;
  }
  draw(ctx) {
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const blobs = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 6; i++) {
      blobs.push(new Blob(canvas));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'screen';
      blobs.forEach(b => {
        b.update();
        b.draw(ctx);
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="particles-canvas" style={{ filter: 'blur(30px)' }} />;
}

