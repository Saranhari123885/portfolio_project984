import { useEffect, useRef } from 'react';

interface FloatingObject {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  type: 'sphere' | 'cube' | 'pyramid';
  rotationX: number;
  rotationY: number;
  angularVx: number;
  angularVy: number;
}

export default function FloatingObjects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const objects: FloatingObject[] = [];
    const objectTypes: Array<'sphere' | 'cube' | 'pyramid'> = ['sphere', 'cube', 'pyramid'];

    for (let i = 0; i < 8; i++) {
      objects.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 500 - 250,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        vz: (Math.random() - 0.5) * 2,
        size: Math.random() * 30 + 20,
        type: objectTypes[Math.floor(Math.random() * objectTypes.length)],
        rotationX: Math.random() * Math.PI * 2,
        rotationY: Math.random() * Math.PI * 2,
        angularVx: (Math.random() - 0.5) * 0.05,
        angularVy: (Math.random() - 0.5) * 0.05,
      });
    }

    let animationId: number;

    function drawSphere(x: number, y: number, size: number, opacity: number) {
      const gradient = ctx.createRadialGradient(x - size / 4, y - size / 4, 0, x, y, size);
      gradient.addColorStop(0, `rgba(100, 255, 255, ${opacity})`);
      gradient.addColorStop(0.5, `rgba(34, 211, 238, ${opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.2})`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawCube(x: number, y: number, size: number, opacity: number) {
      const halfSize = size / 2;
      ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.strokeRect(x - halfSize, y - halfSize, size, size);

      ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 0.1})`;
      ctx.fillRect(x - halfSize, y - halfSize, size, size);
    }

    function drawPyramid(x: number, y: number, size: number, opacity: number) {
      ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
      ctx.lineWidth = 2;

      const halfSize = size / 2;
      ctx.beginPath();
      ctx.moveTo(x, y - halfSize);
      ctx.lineTo(x + halfSize, y + halfSize);
      ctx.lineTo(x - halfSize, y + halfSize);
      ctx.closePath();
      ctx.stroke();

      ctx.fillStyle = `rgba(34, 211, 238, ${opacity * 0.1})`;
      ctx.fill();
    }

    function animate() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      objects.forEach((obj) => {
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.z += obj.vz;

        obj.rotationX += obj.angularVx;
        obj.rotationY += obj.angularVy;

        if (obj.x > canvas.width / 2) obj.x = -canvas.width / 2;
        if (obj.x < -canvas.width / 2) obj.x = canvas.width / 2;
        if (obj.y > canvas.height / 2) obj.y = -canvas.height / 2;
        if (obj.y < -canvas.height / 2) obj.y = canvas.height / 2;
        if (obj.z > 250) obj.z = -250;
        if (obj.z < -250) obj.z = 250;

        const scale = 250 / (250 + obj.z);
        const screenX = obj.x * scale + canvas.width / 2;
        const screenY = obj.y * scale + canvas.height / 2;
        const screenSize = obj.size * scale;
        const opacity = (obj.z + 250) / 500;

        if (obj.type === 'sphere') {
          drawSphere(screenX, screenY, screenSize, opacity);
        } else if (obj.type === 'cube') {
          drawCube(screenX, screenY, screenSize, opacity);
        } else if (obj.type === 'pyramid') {
          drawPyramid(screenX, screenY, screenSize, opacity);
        }
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: 'transparent', zIndex: 1 }}
    />
  );
}
