//https://dev.to/michael-gokey/flip-for-knowledge-building-a-flashcard-game-with-html-css-javascript-3o9j

//key value pairs READ IN from database
const flashcards = [{q: مرحبا, a: Hello},{q: كبير, a: Big},{q: صغير, a: Small},
    {q: جميل, a: Beautiful}, {q: تفاحة, a: Apple}, {q: برتقال, a: Orange}, {q: موز, a: Banana},
    {q: أحمر, a: Red},{q: أزرق, a: Blue},{q: أخضر, a: Green}
];

//const begin = getElementById('begin');
//begin.addEventListener('click', begin());

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flashcard-container");

    flashcards.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        cardDiv.innerHTML = `
            <div class="card-inner">
            <div class="card-front">${card.q}</div>
            <div class="card-back">${card.a}</div>
            </div>
        `;

        cardDiv.addEventListener("click", () => {
            cardDiv.classList.toggle("flipped");
        });

        container.appendChild(cardDiv);
    });
});