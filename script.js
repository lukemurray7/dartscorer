let totalScore = 0;
let numberOfThrows = 0;
const MAX_SCORE = 180;

const totalScoreElement = document.getElementById('total-score');
const averageScoreElement = document.getElementById('average-score');
const numberOfThrowsElement = document.getElementById('number-of-throws');
const numberButtons = document.querySelectorAll('.number-button');
let currentInput = '';

const currentScoreElement = document.getElementById('current-score');

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput.length < 3) {
            currentInput += button.textContent;
            const score = parseInt(currentInput, 10);
            if (score <= MAX_SCORE) {
                currentScoreElement.value = currentInput;
            } else {
                currentInput = currentInput.slice(0, -1);
            }
        }
    });
});

const submitScoreButton = document.getElementById('submit-score');
submitScoreButton.addEventListener('click', () => {
    if (currentInput !== '') {
        const score = parseInt(currentInput, 10);
        if (score <= MAX_SCORE) {
            totalScore += score;
            numberOfThrows++;
            const averageScore = (totalScore / numberOfThrows).toFixed(2);

            totalScoreElement.textContent = totalScore;
            averageScoreElement.textContent = averageScore;
            numberOfThrowsElement.textContent = numberOfThrows;

            currentInput = '';
            currentScoreElement.value = '';
        }
    }
}); 