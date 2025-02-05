const messages = [
    "Estas segura?",
    "Realmente segura??",
    "Juli please...",
    "Solo piensalo!",
    "Si dices que no,estare muy triste...",
    "Demasiado Triste...",
    "En serio muy muy triste...",
    "Ok bueno, parare de preguntar...",
    "Obvio que no, solo di si please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}