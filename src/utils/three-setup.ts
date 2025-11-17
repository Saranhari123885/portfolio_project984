export function initializeTHREEBackground(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = width;
  canvas.height = height;

  let animationId: number;
  let time = 0;

  const particles: Array<{
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    size: number;
    opacity: number;
  }> = [];

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * width - width / 2,
      y: Math.random() * height - height / 2,
      z: Math.random() * 500 - 250,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      vz: (Math.random() - 0.5) * 1,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
    });
  }

  function animate() {
    time += 0.01;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
    ctx.fillRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;

      if (particle.x > width / 2) particle.x = -width / 2;
      if (particle.x < -width / 2) particle.x = width / 2;
      if (particle.y > height / 2) particle.y = -height / 2;
      if (particle.y < -height / 2) particle.y = height / 2;
      if (particle.z > 250) particle.z = -250;
      if (particle.z < -250) particle.z = 250;

      const scale = 250 / (250 + particle.z);
      const x = particle.x * scale + width / 2;
      const y = particle.y * scale + height / 2;

      ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity * scale})`;
      ctx.beginPath();
      ctx.arc(x, y, particle.size * scale, 0, Math.PI * 2);
      ctx.fill();

      const nextScale = 250 / (250 + particle.z + particle.vz);
      const nextX = (particle.x + particle.vx) * nextScale + width / 2;
      const nextY = (particle.y + particle.vy) * nextScale + height / 2;

      ctx.strokeStyle = `rgba(34, 211, 238, ${particle.opacity * scale * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nextX, nextY);
      ctx.stroke();
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();

  return () => {
    cancelAnimationFrame(animationId);
    canvas.remove();
  };
}

export function createFloatingCube(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = (canvas.width = container.clientWidth);
  const height = (canvas.height = container.clientHeight);

  let animationId: number;
  let time = 0;

  const cube = {
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
  };

  function rotateX(point: [number, number, number], angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [point[0], point[1] * cos - point[2] * sin, point[1] * sin + point[2] * cos] as [number, number, number];
  }

  function rotateY(point: [number, number, number], angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [point[0] * cos + point[2] * sin, point[1], -point[0] * sin + point[2] * cos] as [number, number, number];
  }

  function rotateZ(point: [number, number, number], angle: number) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return [point[0] * cos - point[1] * sin, point[0] * sin + point[1] * cos, point[2]] as [number, number, number];
  }

  function project(point: [number, number, number]) {
    const scale = 300 / (300 + point[2]);
    return [point[0] * scale + width / 2, point[1] * scale + height / 2, point[2]];
  }

  function animate() {
    time += 0.01;
    cube.rotationX = time * 0.5;
    cube.rotationY = time * 0.7;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
    ctx.fillRect(0, 0, width, height);

    const vertices: Array<[number, number, number]> = [
      [-50, -50, -50],
      [50, -50, -50],
      [50, 50, -50],
      [-50, 50, -50],
      [-50, -50, 50],
      [50, -50, 50],
      [50, 50, 50],
      [-50, 50, 50],
    ];

    const rotatedVertices = vertices.map((v) => {
      let point = rotateX(v, cube.rotationX);
      point = rotateY(point, cube.rotationY);
      point = rotateZ(point, cube.rotationX);
      return point;
    });

    const projectedVertices = rotatedVertices.map((v) => project(v));

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
      ctx.fillStyle = 'rgba(34, 211, 238, 1)';
      ctx.beginPath();
      ctx.arc(point[0], point[1], 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.beginPath();
      ctx.arc(point[0], point[1], 2, 0, Math.PI * 2);
      ctx.fill();
    });

    animationId = requestAnimationFrame(animate);
  }

  animate();

  return () => {
    cancelAnimationFrame(animationId);
    canvas.remove();
  };
}
