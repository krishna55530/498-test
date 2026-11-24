const words = [{q: "مرحبا", a: "Hello"},{q: "كبير", a: "Big"},{q: "صغير", a: "Small"},
    {q: "جميل", a: "Beautiful"}, {q: "تفاحة", a: "Apple"}, {q: "برتقال", a: "Orange"}, {q: "موز", a: "Banana"},
    {q: "أحمر", a: "Red"},{q: "أزرق", a: "Blue"},{q: "أخضر", a: "Green"}, {q: "أصفر", a: "Yellow"},{q: "أسود", a: "Black"},{q: "أبيض", a: "White"},
    {q: "قطة", a: "Cat"},{q: "كلب", a: "Dog"},{q: "حصان", a: "Horse"},{q: "فأر", a: "Mouse"},{q: "عصفور", a: "Bird"},
    {q: "سيارة", a: "Car"},{q: "دراجة", a: "Bicycle"},{q: "حافلة", a: "Bus"},{q: "قطار", a: "Train"},{q: "طائرة", a: "Airplane"},
    {q: "بيت", a: "House"},{q: "شقة", a: "Apartment"},{q: "غرفة", a: "Room"},{q: "مطبخ", a: "Kitchen"},{q: "حمام", a: "Bathroom"},
    {q: "كتاب", a: "Book"},{q: "قلم", a: "Pen"},{q: "ورقة", a: "Paper"},{q: "دفتر", a: "Notebook"},{q: "ممحاة", a: "Eraser"}
]; //integration: pull from saved like flash.js

/* TRANSLATION IS THE ENGLISH WORD */

//let words = [];
let index = 0;
let mistakes = 0;

const wordElements = Array.from(document.querySelectorAll('.word'));
const transElements = Array.from(document.querySelectorAll('.translation'));
const counterElement = document.getElementById('counter');
const mistakesElement = document.getElementById('mistakes');
const nextButton = document.getElementById("next");

const total = words.length;

document.addEventListener("DOMContentLoaded", () => {
    //load initial
    newQuiz();
});

/* something is selected in EITHER word or translation div.
        when button has been clicked: it is now selected.
        change color, no func until SECOND OPP DIV 
   only allow one at a time in each.
   when second thing is selected in OPPPOSITE div, call match()
   to verify if this word/trans pair is correct
        if correct: disable both elements */

//add selected class to clicked element, remove from others in same div
//CHECK if the other div has a selected element, if so call match() to verify
function select(element) {
    // Remove selected class from all elements in the same div
    const parentDiv = element.parentElement;
    const siblings = Array.from(parentDiv.children);
    siblings.forEach(sib => sib.classList.remove('selected'));

    // Add selected class to clicked element
    element.classList.add('selected');

    if (parentDiv.classList.contains('word-container')) {
        const transSelected = transElements.find(el => el.classList.contains('selected'));
        if (transSelected) {
            match();
        }  
    } else if (parentDiv.classList.contains('translation-container')) {
        const wordSelected = wordElements.find(el => el.classList.contains('selected'));
        if (wordSelected) {
            match();
        }
    }
}

function match() {
    //better way to do this than adding a selected class?
    const wordSelected = wordElements.find(element => element.classList.contains('selected'));
    const pair = words.find(element => element.q === wordSelected.textContent);
    const transSelected = transElements.find(element => element.classList.contains('selected'));

    //feels inefficient
    if (wordSelected && transSelected) {
        // Check if the selected word and translation match
        const wordIndex = wordElements.indexOf(wordSelected);
        const transIndex = transElements.indexOf(transSelected);

        if (words[wordIndex].a === words[transIndex].q) {
            // Correct match
            wordSelected.classList.remove('selected');
            transSelected.classList.remove('selected');
            wordSelected.disabled = true;
            transSelected.disabled = true;
        } else { //clean-up?
            // Incorrect match
            // both elements red for a second
            mistakes++;
        }
    } else {
        mistakes++;
    }

    mistakesElement.textContent = `Mistakes: ${mistakes}`;
}

function newQuiz() {
    index = index + 6;
    counterElement.textContent = `${index} / ${total}`;

    for (i = index - 6; i < index; i++) {
        wordElements[i].textContent = words[i].a;
        transElements[i].textContent = words[i].q;
    }
}