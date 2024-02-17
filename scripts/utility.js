function addOrRemoveBackground(type, elementId) {
    const findElement = document.getElementById(elementId);
    if (type === "add") {
        findElement.classList.add("bg-orange-400")
    } else if (type === "remove") {
        findElement.classList.remove("bg-orange-400");
    }
}

function displayOrHideElement(type, elementId) {
    const id = document.getElementById(elementId);
    if (type === "hide") {
        id.classList.add("hidden");
        id.classList.remove("flex");
    } else if (type === "show") {
        id.classList.add("flex");
        id.classList.remove("hidden");
    }
}

function generateRandomAlphabet() {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    const arrayAlphabet = alphabets.split("");
    const randomNumber = Math.round(Math.random() * 25);
    const randomAlphabet = arrayAlphabet[randomNumber];
    return randomAlphabet;
}
function positionOutput(elementId, value) {
    const findElement = document.getElementById(elementId);
    findElement.innerText = value;
}