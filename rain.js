const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const raindrops = [];

function createRaindrop() {
    return {
        x: Math.random() * canvas.width,
        y: 0,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 2 + 1,
        opacity: Math.random(),
    };
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < raindrops.length; i++) {
        const raindrop = raindrops[i];

        ctx.beginPath();
        ctx.arc(raindrop.x, raindrop.y, raindrop.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${raindrop.opacity})`;
        ctx.fill();

        raindrop.y += raindrop.speed;

        if (raindrop.y > canvas.height) {
            raindrops[i] = createRaindrop();
        }
    }

    requestAnimationFrame(animate);
}

for (let i = 0; i < 100; i++) {
    raindrops.push(createRaindrop());
}

animate();