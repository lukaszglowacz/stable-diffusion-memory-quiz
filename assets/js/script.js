document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.game-card');
    let flippedCards = [];
    let correctScore = 0;
    let wrongScore = 0;

    function updateScore() {
        document.getElementById('correct-score').textContent = `Correct Answers: ${correctScore}`;
        document.getElementById('wrong-score').textContent = `Wrong Answers: ${wrongScore}`;
    }

    function resetCards() {
        flippedCards.forEach(card => {
            const defaultImage = card.querySelector('.default-image');
            const hiddenImage = card.querySelector('.hidden-image');
            defaultImage.style.display = 'block';
            hiddenImage.style.display = 'none';
        });
        flippedCards = [];
    }

    function checkCards() {
        if (flippedCards.length === 2) {
            const img1 = flippedCards[0].querySelector('.hidden-image').src;
            const img2 = flippedCards[1].querySelector('.hidden-image').src;

            if (img1 === img2) {
                correctScore++;
                flippedCards = [];
            } else {
                wrongScore++;
                setTimeout(resetCards, 1000);
            }

            updateScore();
        }
    }

    function flipCard(card) {
        const defaultImage = card.querySelector('.default-image');
        const hiddenImage = card.querySelector('.hidden-image');

        if (defaultImage.style.display !== 'none') {
            defaultImage.style.display = 'none';
            hiddenImage.style.display = 'block';
            flippedCards.push(card);
            checkCards();

            // Check if the game has ended:
            const allFlipped = Array.from(cards).every(card => card.querySelector('.default-image').style.display === 'none');
            if (allFlipped) {
                setTimeout(checkWinOrLose, 1000); // You can adjust the delay as needed
            }
        }
    }


    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            if (flippedCards.length < 2 && !flippedCards.includes(card)) {
                flipCard(card);
            }
        });
    });

    document.querySelector('.start-button').addEventListener('click', function () {
        correctScore = 0;
        wrongScore = 0;
        updateScore();
        cards.forEach(resetCards);
    });
});


function checkWinOrLose() {
    const correctAnswers = parseInt(document.getElementById('correct-score').textContent.split(': ')[1]);
    const wrongAnswers = parseInt(document.getElementById('wrong-score').textContent.split(': ')[1]);

    if (correctAnswers > wrongAnswers) {
        alert('Congratulations! You win the game!');
    } else if (wrongAnswers > correctAnswers) {
        alert('Sorry, you lost the game. Better luck next time!');
    } else {
        alert('It\'s a draw! You neither win nor lose.');
    }
}