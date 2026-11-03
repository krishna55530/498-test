//https://dev.to/michael-gokey/flip-for-knowledge-building-a-flashcard-game-with-html-css-javascript-3o9j

/* EVENTUALLY
const response = await fetch("/api/flashcards");
    const flashcards = await response.json();
Change onclick to event handlers
*/

const flashcards = [{q: "مرحبا", a: "Hello"},{q: "كبير", a: "Big"},{q: "صغير", a: "Small"},
    {q: "جميل", a: "Beautiful"}, {q: "تفاحة", a: "Apple"}, {q: "برتقال", a: "Orange"}, {q: "موز", a: "Banana"},
    {q: "أحمر", a: "Red"},{q: "أزرق", a: "Blue"},{q: "أخضر", a: "Green"}, {q: "أصفر", a: "Yellow"},{q: "أسود", a: "Black"},{q: "أبيض", a: "White"},
    {q: "قطة", a: "Cat"},{q: "كلب", a: "Dog"},{q: "حصان", a: "Horse"},{q: "فأر", a: "Mouse"},{q: "عصفور", a: "Bird"},
    {q: "سيارة", a: "Car"},{q: "دراجة", a: "Bicycle"},{q: "حافلة", a: "Bus"},{q: "قطار", a: "Train"},{q: "طائرة", a: "Airplane"},
    {q: "بيت", a: "House"},{q: "شقة", a: "Apartment"},{q: "غرفة", a: "Room"},{q: "مطبخ", a: "Kitchen"},{q: "حمام", a: "Bathroom"},
    {q: "كتاب", a: "Book"},{q: "قلم", a: "Pen"},{q: "ورقة", a: "Paper"},{q: "دفتر", a: "Notebook"},{q: "ممحاة", a: "Eraser"}
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

function updateCard() {
    // Unflip
    cardElement.classList.remove("flipped");
    
    const card = flashcards[currentIndex];
    frontElement.textContent = card.q;
    backElement.textContent = card.a;
    counterElement.textContent = `${currentIndex + 1} / ${flashcards.length}`;
}

function flipCard() {
    cardElement.classList.toggle("flipped");
}

function nextCard() {
    cardElement.classList.remove("flipped");
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
}