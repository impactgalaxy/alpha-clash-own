// instruction
const instruct = document.getElementById("instruction");
function instruction() {
    displayOrHideElement('show', "instruction")
    instruct.style.height = "100%";

}
function hide() {
    displayOrHideElement("hide", "instruction");
}
let score = 0;
let life = 5;
function userInputGetter(event) {
    const userKey = event.key.toLowerCase();
    const screenAlpha = document.getElementById("output").innerText.toLowerCase();

    if (userKey === screenAlpha) {
        score += 1;
        gamingLoop();
        positionOutput("your-score", score);
        addOrRemoveBackground("remove", screenAlpha);

    } else {
        life -= 1;
        positionOutput("your-life", life);

        if (life === 0) {
            displayOrHideElement("hide", "play-ground");
            displayOrHideElement("show", "final-section");
            positionOutput("final-score", score);
            addOrRemoveBackground("remove", screenAlpha);
        }
    }
}

document.addEventListener("keyup", userInputGetter);

function gamingLoop() {
    const myAlphabet = generateRandomAlphabet();
    positionOutput("output", myAlphabet);
    addOrRemoveBackground("add", myAlphabet);

}

function startNow() {
    gamingLoop();
    displayOrHideElement("hide", "intro");
    displayOrHideElement("show", "play-ground");
    displayOrHideElement("hide", "final-section");
    life = 5;
    score = 0;
    positionOutput("your-score", score);
    positionOutput("your-life", life)
}

function playAgain() {
    startNow();
}
function home() {
    location.reload();
}
const intro = document.getElementById("intro");
const finalSection = document.getElementById("final-section");
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter" && !intro.classList.contains("hidden")) {
        startNow();
        life += 2;
    }
})
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "Enter" && !finalSection.classList.contains("hidden")) {
        startNow();
        life += 2;
    }
})