const searchInput = document.getElementById("developerSearch");
const cards = document.querySelectorAll(".developer-card");
const buttons = document.querySelectorAll(".filter-button");


// Search
searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});


// Filters
buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        const filter = button.getAttribute("data-filter");

        cards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            if (filter === "all") {
                card.style.display = "flex";
            }

            else if (filter === "front-end") {
                card.style.display =
                    cardText.includes("front-end")
                    ? "flex"
                    : "none";
            }

            else if (filter === "back-end") {
                card.style.display =
                    cardText.includes("back-end")
                    ? "flex"
                    : "none";
            }

            else if (filter === "ui-ux") {
                card.style.display =
                    cardText.includes("ui/ux") ||
                    cardText.includes("ui / ux")
                    ? "flex"
                    : "none";
            }

        });

    });

});