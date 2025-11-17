import { useEffect, useRef } from 'react';

interface RotatingCubeProps {
  size?: number;
}

export default function RotatingCube({ size = 150 }: RotatingCubeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = 300);
    const height = (canvas.height = 300);

    let time = 0;
    let animationId: number;

    function rotateX(point: [number, number, number], angle: number): [number, number, number] {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [point[0], point[1] * cos - point[2] * sin, point[1] * sin + point[2] * cos];
    }

    function rotateY(point: [number, number, number], angle: number): [number, number, number] {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [point[0] * cos + point[2] * sin, point[1], -point[0] * sin + point[2] * cos];
    }

    function rotateZ(point: [number, number, number], angle: number): [number, number, number] {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [point[0] * cos - point[1] * sin, point[0] * sin + point[1] * cos, point[2]];
    }

    function project(point: [number, number, number]): [number, number, number] {
      const scale = 300 / (300 + point[2]);
      return [point[0] * scale + width / 2, point[1] * scale + height / 2, point[2]];
    }

    function animate() {
      time += 0.01;

      ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      ctx.fillRect(0, 0, width, height);
      ctx.clearRect(0, 0, width, height);

      const vertices: [number, number, number][] = [
        [-size / 2, -size / 2, -size / 2],
        [size / 2, -size / 2, -size / 2],
        [size / 2, size / 2, -size / 2],
        [-size / 2, size / 2, -size / 2],
        [-size / 2, -size / 2, size / 2],
        [size / 2, -size / 2, size / 2],
        [size / 2, size / 2, size / 2],
        [-size / 2, size / 2, size / 2],
      ];

      const rotatedVertices = vertices.map((v) => {
        let point = rotateX(v, time);
        point = rotateY(point, time * 1.3);
        point = rotateZ(point, time * 0.7);
        return point;
      });

      const projectedVertices = rotatedVertices.map((v) => project(v));

      const faces = [
        { indices: [0, 1, 2, 3], color: 'rgba(34, 211, 238, 0.3)' },
        { indices: [4, 5, 6, 7], color: 'rgba(34, 211, 238, 0.3)' },
        { indices: [0, 1, 5, 4], color: 'rgba(59, 130, 246, 0.3)' },
        { indices: [2, 3, 7, 6], color: 'rgba(59, 130, 246, 0.3)' },
        { indices: [0, 3, 7, 4], color: 'rgba(139, 92, 246, 0.2)' },
        { indices: [1, 2, 6, 5], color: 'rgba(139, 92, 246, 0.2)' },
      ];

      faces.forEach((face) => {
        const points = face.indices.map((i) => projectedVertices[i]);
        const avgZ = points.reduce((sum, p) => sum + p[2], 0) / points.length;

        ctx.fillStyle = face.color;
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        points.forEach((p, i) => {
          if (i > 0) ctx.lineTo(p[0], p[1]);
        });
        ctx.closePath();
        ctx.fill();
      });

      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      ctx.strokeStyle = 'rgba(34, 211, 238, 0.8)';
      ctx.lineWidth = 2;

      edges.forEach(([start, end]) => {
        const p1 = projectedVertices[start];
        const p2 = projectedVertices[end];
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      });

      projectedVertices.forEach((point) => {
        ctx.fillStyle = 'rgba(34, 211, 238, 0.9)';
        ctx.beginPath();
        ctx.arc(point[0], point[1], 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(point[0], point[1], 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ maxWidth: '300px', maxHeight: '300px' }}
      />
    </div>
  );
}
