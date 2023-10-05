// Wait until the DOM is fully loaded before executing the scripts
document.addEventListener('DOMContentLoaded', function () {

    /* ========== Game Logic ========== */

    const cards = document.querySelectorAll('.game-card');
    let flippedCards = []; // Array to keep track of flipped cards
    let correctScore = 0; // Count of correct guesses
    let wrongScore = 0; // Count of wrong guesses
    let gameStarted = false; // Indicates if the game has started
    const startButton = document.querySelector('.start-button');

    // Update the score board
    function updateScore() {
        document.getElementById('correct-score').textContent = `Correct: ${correctScore}`;
        document.getElementById('wrong-score').textContent = `Wrong: ${wrongScore}`;
    }

    // Reset all cards to their initial state
    function resetCards() {
        cards.forEach(card => {
            const defaultImage = card.querySelector('.default-image');
            const hiddenImage = card.querySelector('.hidden-image');
            defaultImage.style.display = 'block';
            hiddenImage.style.display = 'none';
        });
        flippedCards = [];
    }

    // Reset only the incorrectly matched cards
    function resetWrongCards() {
        flippedCards.forEach(card => {
            const defaultImage = card.querySelector('.default-image');
            const hiddenImage = card.querySelector('.hidden-image');
            defaultImage.style.display = 'block';
            hiddenImage.style.display = 'none';
        });
        flippedCards = [];
    }

    // Check if the two flipped cards match
    function checkCards() {
        if (flippedCards.length === 2) {
            const img1 = flippedCards[0].querySelector('.hidden-image').src;
            const img2 = flippedCards[1].querySelector('.hidden-image').src;

            if (img1 === img2) {
                correctScore++;
                flippedCards = [];
            } else {
                wrongScore++;
                setTimeout(resetWrongCards, 1000);
            }

            updateScore();
        }
    }

    // Handle card flipping logic
    function flipCard(card) {
        if (!gameStarted) return;

        const defaultImage = card.querySelector('.default-image');
        const hiddenImage = card.querySelector('.hidden-image');

        if (defaultImage.style.display !== 'none') {
            defaultImage.style.display = 'none';
            hiddenImage.style.display = 'block';
            flippedCards.push(card);
            checkCards();

            const allFlipped = Array.from(cards).every(card => card.querySelector('.default-image').style.display === 'none');
            if (allFlipped) {
                setTimeout(checkWinOrLose, 1000);
            }
        }
    }

    // Add event listeners to each card for flipping
    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (flippedCards.length < 2 && !flippedCards.includes(card)) {
                flipCard(card);
            }
        });
    });

    // Initialize or restart the game on start button click
    startButton.addEventListener('click', function () {
        if (!gameStarted) {
            gameStarted = true;
            this.textContent = 'Playing...';
            correctScore = 0;
            wrongScore = 0;
            updateScore();
            resetCards();
        }
    });

    // Check game results and notify the player
    window.checkWinOrLose = function () {
        const correctAnswers = parseInt(document.getElementById('correct-score').textContent.split(': ')[1]);
        const wrongAnswers = parseInt(document.getElementById('wrong-score').textContent.split(': ')[1]);

        const resultModal = document.getElementById('resultModal');
        const resultMessage = document.getElementById('resultMessage');
        const closeResultBtn = document.getElementById('closeResultBtn');

        if (correctAnswers > wrongAnswers) {
            resultMessage.textContent = 'Congratulations! You win the game!';
        } else if (wrongAnswers > correctAnswers) {
            resultMessage.textContent = 'Sorry, you lost the game. Better luck next time!';
        } else {
            resultMessage.textContent = 'It\'s a draw! You neither win nor lose.';
        }

        resultModal.style.display = 'block';

        closeResultBtn.addEventListener('click', function () {
            resultModal.style.display = 'none';
        });

        gameStarted = false;
        resetCards();
        startButton.textContent = 'Play again';
    };

    /* ========== Modal Handling ========== */

    const modal = document.getElementById('rulesModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Display the rules modal as the page loads
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';

    // Hide the modal on close button click
    closeModalBtn.addEventListener('click', function () {
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    });

    // Close the modal when user clicks outside the modal content
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.visibility = 'hidden';
            modal.style.opacity = '0';
        }
    });
});
