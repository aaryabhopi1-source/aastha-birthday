// ===============================
// MUSIC
// ===============================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.currentTime = 60;

musicBtn.addEventListener("click", function () {
    music.play();

    musicBtn.innerHTML = "🎵 Music Playing ❤️";
});
window.addEventListener("load", function () {
    music.play().catch(function () {
        console.log("Chrome blocked autoplay");
    });
});
document.addEventListener("click", function startMusic() {
    music.play().catch(function () {
        console.log("Music blocked");
    });

    document.removeEventListener("click", startMusic);
});

// ===============================
// SURPRISE
// ===============================

function openSurprise() {
    document.getElementById("surprise").style.display = "flex";

    music.play().catch(function() {
        console.log("Music could not start");
    });

    // Typewriter Effect
    const text = document.querySelector("#surprise p");

    if (text) {
        const originalText = text.innerHTML;
        text.innerHTML = "";
        
        let i = 0;

        function typeWriter() {
            if (i < originalText.length) {
                text.innerHTML += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        }

        typeWriter();
    }
}


// ===============================
// PHOTO SLIDESHOW
// ===============================

const photos = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
];

let currentPhoto = 0;

setInterval(function () {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    document.getElementById("sliderImage").src =
        "./"+photos[currentPhoto];

}, 3000);
// FLOATING HEARTS ❤️

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    document.getElementById("effects").appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);


// FLOATING BALLOONS 🎈

function createBalloon() {
    const balloon = document.createElement("div");

    balloon.className = "balloon";
    balloon.innerHTML = "🎈";

    balloon.style.left = Math.random() * 100 + "%";

    document.getElementById("effects").appendChild(balloon);

    setTimeout(function () {
        balloon.remove();
    }, 9000);
}

setInterval(createBalloon, 900);

// ===============================
// COUNTDOWN
// ===============================

const birthdayDate = new Date("September 1, 2026 00:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML =
            "🎉 Happy Birthday Bestie! 🎂❤️";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}, 1000);
// ================================
// FIREWORKS 🎆
// ================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = [];

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = 100 + Math.random() * (canvas.height * 0.45);

    const colors = [
        "#ff3366",
        "#ffd700",
        "#00bfff",
        "#ff66ff",
        "#00ff99"
    ];

    for (let i = 0; i < 70; i++) {

        const angle = Math.random() * Math.PI * 2;
        const speed = 3 + Math.random() * 6;

        particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 60,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function(p) {

        p.x += p.vx;
        p.y += p.vy;

        p.vy += 0.05;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
    });

    particles = particles.filter(function(p) {
        return p.life > 0;
    });

    requestAnimationFrame(animateFireworks);
}

animateFireworks();

setInterval(function() {
    createFirework();
}, 900);
