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
const counterElement = document.getElementById('counter');

document.addEventListener("DOMContentLoaded", () => {
    //load initial
    updateCard();
});

function updateCard() {
    // Unflip
    //cardElement.classList.add("no-transition");
    cardElement.classList.remove("flipped");
    
    const card = flashcards[currentIndex];
    frontElement.textContent = card.q;
    backElement.textContent = card.a;
    counterElement.textContent = `${currentIndex + 1} / ${flashcards.length}`;

    //cardElement.classList.remove("no-transition");
}

function flipCard() {
    cardElement.classList.toggle("flipped");
}

function nextCard() {
    if (flashcards[currentIndex].flipped) {
        flipCard()
    }
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateCard();
}
