// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

// FOR

// let sum = 0;

// for (let i = 0; i < 10; i++) {

//     let number = parseInt(prompt('Insert number'));

//     sum += number;
// }

// console.log(sum);

// // WHILE

let sum = 0;
let i = 0;

while (i < 10) {

    let number = parseInt(prompt('Inserisci un numero'));

    sum += number;
    i++;
}

console.log(sum);