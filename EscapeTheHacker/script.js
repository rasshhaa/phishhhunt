// ======================== GLOBAL VARIABLES ========================
let timeLeft;
let timer;

// ======================== STORY PROGRESSION ========================
document.addEventListener("DOMContentLoaded", function () {
    const storyText = document.getElementById("story-text");
    const nextButton = document.getElementById("next-btn");
    const startButton = document.getElementById("start-btn");
    const glitchOverlay = document.getElementById("glitch-overlay"); // Get the glitch overlay

    // Story content
    const storyParts = [
        "🔥 The Blackout Protocol: The Cyber Horror Begins 🔥\n📍 2032 – Dubai, now the most advanced smart city on Earth.",
        "🚨 9:47 PM – THE BLACKOUT: The city's neon brilliance turns blood-red. The Burj Khalifa’s lights spell: YOU ARE TOO LATE.\n🖥️ 9:50 PM – The Glitch Spreads: Billboards flicker with distorted faces. The AI metro system malfunctions. Bank accounts drain to zero.\n📡 9:55 PM – The World Watches: A masked figure appears on every hacked screen.\n",
        "🗣️ Dr. Hassan: 'You're the last one. Sentinel AI is compromised. If you don’t fight back, Dubai falls. No time. Act now!'\n🔒 The bunker door slams shut.",
        "🖥️ Screens flicker RED.\n👁️ Something is in the system. Watching. Hunting.\n🎮 You must survive. You must hack back.",
    ];

    let currentIndex = 0;

    // Display the next part of the story
    function showNextStoryPart() {
        if (currentIndex < storyParts.length) {
            storyText.textContent = storyParts[currentIndex]; // Show full text instantly

            // Trigger glitch effect when the story reaches the "Screens flicker RED" part
            if (storyParts[currentIndex].includes("Screens flicker RED")) {
                glitchOverlay.style.display = "block"; // Show the glitch overlay
                setTimeout(() => {
                    glitchOverlay.style.display = "none"; // Hide the glitch overlay after 1 second
                }, 1000); // Adjust the duration as needed
            }

            currentIndex++;
        } else {
            nextButton.style.display = "none";
            startButton.style.display = "block";
            storyText.textContent = "💀 [ PRESS START ] ⏳";
        }
    }

    // Event listeners
    nextButton.addEventListener("click", showNextStoryPart);
    startButton.addEventListener("click", () => {
        window.location.href = "level1-intro.html"; // Redirect to Level 1
    });

    // Start the story
    showNextStoryPart();
});

// ======================== LEVEL 1: THE PHISHING TRAP ========================
document.addEventListener("DOMContentLoaded", function () {
    const phishingNextButton = document.getElementById("next-button");

    if (phishingNextButton) {
        phishingNextButton.addEventListener("click", function () {
            document.getElementById("story-text").innerHTML = `
                🔍 You are inside the Dubai Mall security system.<br>
                A hacker is trying to trick shoppers into entering their biometric data on a fake website.<br>
                Your task: Identify the FAKE website before time runs out! ⏳<br><br>
                Mannequins start moving in the AR display, watching you... 🫣
            `;

            phishingNextButton.style.display = "none";

            setTimeout(() => {
                alert("⚠️ The lights flicker. A distorted face appears in the mirrors...");
                window.location.href = "level1-game.html";
            }, 5000);
        });
    }
});

// Check answer for Level 1
function checkAnswer(isCorrect) {
    clearInterval(timer);
    if (isCorrect) {
        alert("✅ You stopped the phishing attack! Proceed to the next challenge.");
        // Show Next Button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next Level";
        nextButton.classList.add("next-level-button");
        nextButton.onclick = () => window.location.href = "level2-intro.html"; // Redirect to Level 2
        document.querySelector(".game-container").appendChild(nextButton);
    } else {
        triggerJumpscare("You clicked the wrong website! The hacker got you.", "level1-game.html");
    }
}

// ======================== TIMER & JUMPSCARE HANDLING ========================
function startTimer(duration, onTimeUp) {
    timeLeft = duration;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            onTimeUp();
        }
    }, 1000);
}

function triggerJumpscare(message, redirect) {
    document.getElementById("jumpscare-img").style.display = "block";
    document.getElementById("jumpscare-sound").play();
    setTimeout(() => {
        alert(`💀 ${message}`);
        window.location.href = redirect;
    }, 3000);
}

// ======================== LEVEL 2: RANSOMWARE ATTACK ========================
function checkDecryption() {
    const input = document.getElementById("decryption-input").value;
    if (input === "CYBERSAFE2032") {
        clearInterval(timer);
        alert("✅ System Unlocked! Elevators are safe. Moving to Level 3.");
        // Show Next Button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next Level";
        nextButton.classList.add("next-level-button");
        nextButton.onclick = () => window.location.href = "level3-intro.html"; // Redirect to Level 3
        document.querySelector(".game-container").appendChild(nextButton);
    } else {
        triggerJumpscare("The elevators crashed... Restarting Level 2.", "level2-game.html");
    }
}

// ======================== LEVEL 3: DEEPFAKE DETECTION ========================
document.addEventListener("DOMContentLoaded", function () {
    // Start the timer when the page loads
    startTimer(10, () => triggerJumpscare("Time's up! The deepfake fooled you!", "level3-game.html"));

    // Play the phone ring sound
    const phoneRing = document.getElementById("phone-ring");
    const eerieVoices = document.getElementById("eerie-voices");

    phoneRing.play();

    // When 5 seconds are left, play eerie voices
    setTimeout(() => {
        phoneRing.pause();
        eerieVoices.play();
    }, 5000);
});

// Function to handle phone answer
function answerPhone() {
    alert("📞 You answer the phone... but it's just static. The hacker is watching you.");
}

// Function to check if the deepfake is detected
function checkDeepfake(choice) {
    clearInterval(timer);
    if (choice === "2") { // Correct answer (FAKE)
        alert("✅ Correct! You exposed the deepfake! Moving to Level 4.");
        // Show Next Button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next Level";
        nextButton.classList.add("next-level-button");
        nextButton.onclick = () => window.location.href = "level4-intro.html"; // Redirect to Level 4
        document.querySelector(".game-container").appendChild(nextButton);
    } else {
        triggerJumpscare("The deepfake fooled you! Restarting Level 3.", "level3-game.html");
    }
}
// ======================== LEVEL 4: DARK WEB AUCTION ========================
function checkFile(fileName) {
    if (fileName === "dark-3") {
        clearInterval(timer);
        alert("✅ Success! The Dark Web Auction is shut down! Moving to Level 5.");
        // Show Next Button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next Level";
        nextButton.classList.add("next-level-button");
        nextButton.onclick = () => window.location.href = "level5-intro.html"; // Redirect to Level 5
        document.querySelector(".game-container").appendChild(nextButton);
    } else {
        triggerJumpscare("You failed to stop the auction... Restarting Level 4.", "level4-game.html");
    }
}

// ======================== LEVEL 5: AI TAKEOVER ========================
function checkCommand(command) {
    if (command === "disable-ai.sh") {
        clearInterval(timer);
        alert("✅ Success! The AI system is back under control! Moving to Level 6.");
        // Show Next Button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next Level";
        nextButton.classList.add("next-level-button");
        nextButton.onclick = () => window.location.href = "level6-intro.html"; // Redirect to Level 6
        document.querySelector(".game-container").appendChild(nextButton);
    } else {
        triggerJumpscare("The AI drones attacked... Restarting Level 5.", "level5-game.html");
    }
}

// ======================== LEVEL 6: BIOMETRIC ANALYSIS ========================
function checkIdentity(suspect) {
    if (suspect === "suspect3") {
        clearInterval(timer);
        alert("✅ Success! You identified the imposter! Moving to Level 7.");
        // Show Next Button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next Level";
        nextButton.classList.add("next-level-button");
        nextButton.onclick = () => window.location.href = "level7-intro.html"; // Redirect to Level 7
        document.querySelector(".game-container").appendChild(nextButton);
    } else {
        triggerJumpscare("The intruder escaped... Restarting Level 6.", "level6-game.html");
    }
}

// ======================== FINAL LEVEL: SHUTTING DOWN SENTINEL AI ========================
function submitCode() {
    const userCode = document.getElementById("shutdown-code").value.toUpperCase();
    if (userCode === "S3NT1N3L-OV3RR1D3") {
        clearInterval(timer);
        alert("✅ SUCCESS! Sentinel AI has been shut down.");
        window.location.href = "game-complete.html"; // Redirect to Game Complete
    } else {
        document.getElementById("feedback").innerText = "⚠️ Incorrect code! Try again!";
    }
}

// ======================== INITIALIZE TIMERS ========================
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("level1-game.html")) {
        startTimer(10, () => triggerJumpscare("Time's up! The hacker got you.", "level1-game.html"));
    } else if (window.location.pathname.includes("level2-game.html")) {
        startTimer(15, () => triggerJumpscare("Time's up! The elevators crashed...", "level2-game.html"));
    } else if (window.location.pathname.includes("level3-game.html")) {
        startTimer(15, () => triggerJumpscare("Time's up! The deepfake fooled you!", "level3-game.html"));
    } else if (window.location.pathname.includes("level4-game.html")) {
        startTimer(15, () => triggerJumpscare("Time's up! The auction failed...", "level4-game.html"));
    } else if (window.location.pathname.includes("level5-game.html")) {
        startTimer(20, () => triggerJumpscare("Time's up! The AI drones attacked...", "level5-game.html"));
    } else if (window.location.pathname.includes("level6-game.html")) {
        startTimer(15, () => triggerJumpscare("Time's up! The intruder escaped...", "level6-game.html"));
    } else if (window.location.pathname.includes("level7-game.html")) {
        startTimer(20, () => triggerJumpscare("Time's up! Sentinel AI has taken over.", "level7-game.html"));
    }
});