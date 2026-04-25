const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const mouse = { x: null, y: null };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 5; i++) {
    particles.push({
      x: mouse.x,
      y: mouse.y,
      size: Math.random() * 5 + 2,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2
    });
  }
});

function animate() {
  ctx.fillStyle = "rgba(15,15,15,0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.x += p.vx;
    p.y += p.vy;
    p.size *= 0.96;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = "#00ffcc";
    ctx.fill();

    if (p.size < 0.5) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
