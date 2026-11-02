//https://dev.to/michael-gokey/flip-for-knowledge-building-a-flashcard-game-with-html-css-javascript-3o9j

//key value pairs READ IN from database
const flashcards = [{q: مرحبا, a: Hello},{q: كبير, a: Big},{q: صغير, a: Small},
    {q: جميل, a: Beautiful}, {q: تفاحة, a: Apple}, {q: برتقال, a: Orange}, {q: موز, a: Banana},
    {q: أحمر, a: Red},{q: أزرق, a: Blue},{q: أخضر, a: Green}
];

let currentIndex = 0;
const cardElement = document.getElementById('flashcard');
const frontElement = document.getElementById('front');
const backElement = document.getElementById('back');
//const prevBtn = document.getElementById('prev');
//const nextBtn = document.getElementById('next');
const counterElement = document.getElementById('counter');
//const container = document.getElementById("card-container"); //need?

document.addEventListener("DOMContentLoaded", () => {
    //load initial
    updateCard();
});

/*function updateCard() {
    const currentCard = flashcards[currentIndex];
    //Reset flip state before updating text
    currentCard.classList.remove('flipped');
    frontElement.textContent = currentCard.q;
    backElement.textContent = currentCard.a;
    counterElement.textContent = `${currentIndex + 1} / ${flashcards.length}`;
}*/

function updateCard() {
    // Unflip
    cardElement.classList.remove('flipped');
    
    // Delay to match visuals
    setTimeout(() => {
    frontElement.textContent = flashcards[currentIndex].question;
    backElement.textContent = flashcards[currentIndex].answer;
    counterElement.textContent = `${currentIndex + 1} / ${flashcards.length}`;
    }, 150);
}

function flipCard() {
    cardElement.classList.toggle('flipped');
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
}