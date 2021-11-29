// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// Chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const guest = [
    'Matteo',
    'Lorenzo',
    'Giuseppe',
    'Ilenia'
]

const userName = prompt('Insert name');
let find = false;

// FOR

// for (let i = 0; i < guests.length; i++) {

//     if (userName == guest[i]) {
//         find = true;
//     }
// }

// WHILE

let i = 0;

while (i < guest.length) {

    if (userName == guest[i]) {
        find = true;
    }

    i++
}

const container = document.querySelector('.container');
if (find == true) {

    container.innerHTML = 'Sei invitato alla festa.';
} else {

    container.innerHTML = 'NON sei invitato alla festa.';
}