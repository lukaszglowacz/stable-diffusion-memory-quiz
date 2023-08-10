document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.game-card');

    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            const defaultImage = card.querySelector('.default-image');
            const hiddenImage = card.querySelector('.hidden-image');

            if (defaultImage.style.display === 'none') {
                defaultImage.style.display = 'block';
                hiddenImage.style.display = 'none';
            } else {
                defaultImage.style.display = 'none';
                hiddenImage.style.display = 'block';
            }
        });
    });
});
