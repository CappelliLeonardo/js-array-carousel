// Consegna:
// Dato un array contenente una lista di cinque immagini,
// creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico:
// costruiamo il container e inseriamo un'immagine grande al centro: avremo così
// la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini
// dinamicamente servendoci dell'array fornito e un semplice
// ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una
// classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva,
// che quindi verrà visualizzata al posto della precedente.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima,
// come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai
// da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a
// riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non
// perdere di vista il focus dell'esercizio.


// Consigli del giorno:

// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine.
// Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per
// poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".

// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare

// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa
// domanda: "Quanti cicli servono?"


 

// const myImages = [
//     'item_one',
//     'item_two',
//     'item_three',
//     'item_four',
//     'item_five'
// ];


// document.getElementById('container').append(myImages);


// const img_two = document.createElement("div");
// const img_three = document.createElement("div");
// const img_four = document.createElement("div");
// const img_five = document.createElement("div");

// const images = [
//     './img/01.webp',
//     './img/02.webp',
//     './img/03.webp',
//     './img/04.webp',
//     './img/05.webp'
// ];


const images = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
];
const imagesContainer = document.getElementById('container');

for(let i = 0; i < images.length; i++) {


    // const itemDiv = document.createElement('div'); // <div
    // itemDiv.setAttribute('class', 'items js'); //<div class="items"

    // const image =  document.createElement('img');
    // image.setAttribute('src', images[i]);
    // // image.src = images[i];

    // itemDiv.appendChild(image);
    // imagesContainer.appendChild(itemDiv);

    imagesContainer.innerHTML += `
        <div class="items">
            <img src="${images[i]}">
        </div>
    `
}

const button = document.getElementById('up-button');
button.addEventListener('click', function(){
    
    
}
);
// SE viene cliccato aumenta una unità
// altrimenti niente

// if se aumenta di una unita allora metti d-none a img [i]
