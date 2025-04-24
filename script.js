let totalScore = 0;
let numberOfThrows = 0;

const totalScoreElement = document.getElementById('total-score');
const averageScoreElement = document.getElementById('average-score');
const numberOfThrowsElement = document.getElementById('number-of-throws');
const numberButtons = document.querySelectorAll('.number-button');
let currentInput = '';

const currentScoreElement = document.getElementById('current-score');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentInput += button.textContent;
        currentScoreElement.value = currentInput;
    });
});

const submitScoreButton = document.getElementById('submit-score');
submitScoreButton.addEventListener('click', () => {
    if (currentInput !== '') {
        const score = parseInt(currentInput, 10);
        totalScore += score;
        numberOfThrows++;
        const averageScore = (totalScore / numberOfThrows).toFixed(2);

        totalScoreElement.textContent = totalScore;
        averageScoreElement.textContent = averageScore;
        numberOfThrowsElement.textContent = numberOfThrows;

        currentInput = '';
        currentScoreElement.value = '';
    }
}); 