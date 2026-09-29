function openSurprise() {

    const message = document.getElementById("message");
    const button = document.getElementById("surpriseBtn");

    message.innerHTML = `
        <div class="main">❤️✨ Prannidhiiiiii ✨❤️</div>

        <div>
            I know you might be nervous, but please don't panic. 🫂
            <br><br>
            Take a deep breath, stay calm, and trust everything you've prepared.
            <br><br>
            If you feel stressed, just remember —
            <strong>I'm always here for you. ❤️</strong>
            <br><br>
            Whatever happens, don't doubt yourself. You can do this. 🌟
            <br><br>
            <strong>My prayers are with you. 🤲❤️</strong>
        </div>

        <div class="final">
            Elu, go rock it! 🔥📚✨
            <br><br>
            <strong>I FRIEND YOU. ❤️</strong>
        </div>
    `;

    button.innerHTML = "💖 You've Got This 💖";

    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = ["❤️", "💖", "💕", "✨", "💗"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}