const music = document.getElementById("music");

function toggleMusic() {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

function reveal(element) {
    element.classList.remove("hidden");
    element.classList.add("show");
}

function startJourney() {

    music.play().catch(() => {});

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

    reveal(document.getElementById("story"));

    document.querySelectorAll(".letter, .cake-section, .final-section")
        .forEach(element => reveal(element));
}

function blow(candle) {

    candle.innerHTML = "💨";
    candle.style.animation = "none";

    const candles = document.querySelectorAll(".candles span");

    const allBlown = [...candles].every(
        item => item.innerHTML === "💨"
    );

    if (allBlown) {
        document.getElementById("wish-message").innerHTML =
            "✨ May all your beautiful wishes come true! ❤️";
    }
}

function celebrate() {

    for (let i = 0; i < 100; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML = ["🎉", "💗", "✨", "🌸", "🎊"][
            Math.floor(Math.random() * 5)
        ];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-30px";
        confetti.style.fontSize = "25px";
        confetti.style.zIndex = "999";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 3000;

        confetti.animate([
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            {
                transform: `translateY(110vh) rotate(${Math.random()*720}deg)`,
                opacity: 0
            }
        ], {
            duration: duration,
            easing: "ease-in"
        });

        setTimeout(() => confetti.remove(), duration);
    }
}

function showSurprise() {

    const message = document.getElementById("final-message");

    message.style.display = "block";

    celebrate();
}

// Floating hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = ["❤️", "💕", "🌸", "✨", "🦋"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 600);