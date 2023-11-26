document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const nextButton = document.querySelector("#nextBtn");
    const prevButton = document.querySelector("#prevBtn");

    let index = 0;
    const maxIndex = carousel.children.length - 1;
    const maxMoves = 3;
    let movesLeft = maxMoves;

    nextButton.addEventListener("click", function() {
        if (movesLeft > 0) {
            index = Math.min(index + 1, maxIndex);
            movesLeft--;
            updateCarousel();
        }
    });

    prevButton.addEventListener("click", function() {
        if (movesLeft > 0) {
            index = Math.max(index - 1, 0);
            movesLeft--;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const translateValue = -index * 100 + "%";
        carousel.style.transform = "translateX(" + translateValue + ")";
    }
});
