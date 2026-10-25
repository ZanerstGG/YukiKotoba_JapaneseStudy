import { useEffect, useRef } from 'react';

export default function SakuraCanvas({ theme = 'light' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const createPetal = (startAtTop = false) => ({
      x: Math.random() * width,
      y: startAtTop ? -20 : Math.random() * height,
      size: 4 + Math.random() * 6,
      speedY: 0.4 + Math.random() * 0.7,
      swing: Math.random() * 6.28,
      rotation: Math.random() * 6.28,
      rotationSpeed: (Math.random() - 0.5) * 0.03,
    });

    const petals = Array.from({ length: 24 }, () => createPetal(false));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle =
        theme === 'dark'
          ? 'rgba(210, 225, 245, 0.55)'
          : 'rgba(235, 145, 170, 0.52)';

      petals.forEach((p, i) => {
        p.y += p.speedY;
        p.swing += 0.015;
        p.x += Math.sin(p.swing) * 0.65;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          petals[i] = createPetal(true);
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="sakura-canvas" aria-hidden="true" />;
}
