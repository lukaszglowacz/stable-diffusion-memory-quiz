// When the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
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
        flippedCards = []; // Clear the array of flipped cards
    }

    // Reset only wrong cards
    function resetWrongCards() {
        flippedCards.forEach(card => {
            const defaultImage = card.querySelector('.default-image');
            const hiddenImage = card.querySelector('.hidden-image');
            defaultImage.style.display = 'block';
            hiddenImage.style.display = 'none';
        });
        flippedCards = []; // Clear the array of flipped cards
    }

    // Check if the two flipped cards match
    function checkCards() {
        if (flippedCards.length === 2) {
            const img1 = flippedCards[0].querySelector('.hidden-image').src;
            const img2 = flippedCards[1].querySelector('.hidden-image').src;

            if (img1 === img2) { // If the cards match
                correctScore++;
                flippedCards = [];
            } else { // If the cards do not match
                wrongScore++;
                setTimeout(resetWrongCards, 1000); // Reset the wrong cards after 1 second
            }

            updateScore(); // Update the score board
        }
    }

    // Flip a card
    function flipCard(card) {
        if (!gameStarted) return; // Don't allow flipping if the game has not started
        const defaultImage = card.querySelector('.default-image');
        const hiddenImage = card.querySelector('.hidden-image');

        if (defaultImage.style.display !== 'none') {
            defaultImage.style.display = 'none';
            hiddenImage.style.display = 'block';
            flippedCards.push(card); // Add the card to the array of flipped cards
            checkCards(); // Check if the flipped cards match

            // Check if all cards have been flipped
            const allFlipped = Array.from(cards).every(card => card.querySelector('.default-image').style.display === 'none');
            if (allFlipped) {
                setTimeout(checkWinOrLose, 1000); // Check the game result after 1 second
            }
        }
    }

    // Add an event listener to each card
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            if (flippedCards.length < 2 && !flippedCards.includes(card)) {
                flipCard(card); // Flip the card
            }
        });
    });

    // Add an event listener to the start button
    startButton.addEventListener('click', function () {
        if (!gameStarted) {
            gameStarted = true; // Start the game
            this.textContent = 'Playing...'; // Change the button text
            correctScore = 0; // Reset the correct score
            wrongScore = 0; // Reset the wrong score
            updateScore(); // Update the score board
            resetCards(); // Reset the cards
        }
    });

    // Check the game result
    window.checkWinOrLose = function () {
        const correctAnswers = parseInt(document.getElementById('correct-score').textContent.split(': ')[1]);
        const wrongAnswers = parseInt(document.getElementById('wrong-score').textContent.split(': ')[1]);

        if (correctAnswers > wrongAnswers) {
            alert('Congratulations! You win the game!');
        } else if (wrongAnswers > correctAnswers) {
            alert('Sorry, you lost the game. Better luck next time!');
        } else {
            alert('It\'s a draw! You neither win nor lose.');
        }

        // Reset the game state
        gameStarted = false;
        resetCards();
        startButton.textContent = 'Play again'; // Change the button text to "Play again"
    };
});

// Modal with instructions
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById('rulesModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Show the modal when the page loads
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';

    // Add an event listener to the close button
    closeModalBtn.addEventListener('click', function () {
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    });

    // Close the modal when clicking outside the content
    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.visibility = 'hidden';
            modal.style.opacity = '0';
        }
    });
});
