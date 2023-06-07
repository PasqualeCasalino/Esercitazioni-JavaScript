// ESERCIZIO DI RISCALDAMENTO N°1


// Scrivere una funzione che prenda in ingresso un qualsiasi dato e mi restituisca una stringa con scritto: 'Il dato inserito è un <tipo del dato>'

// function describe (tipo){
//     let risultato = typeof tipo

//     console.log(`questo tipo di dato è un ${risultato}`);
// }

// describe("ciao")





// ESERCIZIO 2

// Scrivere una funzione che prenda in ingresso un numero e mi stampi la tabellina corrispondente


// function tabellina(numero){
//         for(let i=0; i <= 10; i++){
//             let result = numero * i;
//             console.log(`${numero} * ${i} = ${result}`)
//         }

//         }

//         tabellina(4);




// ESERCIZIO 3


// Scrivere una funzione che prenda in ingresso un array di nomi e me lo restituisca in ordine alfabetico


// function riordina(nomi){
//     return nomi.sort()
// }

// let nomi = ["Alberto" , "Pasquale" , "Gabriele" , "Morris"];
// let nomi2 = riordina(nomi);
// console.log(nomi2);


// ESERCIZIO 4

// Scrivere una funzione che prenda in ingresso due array e mi restituisca un nuovo array che sia l'unione dei due passati.
// Es: arr1 = [1,2,3]   arr2=['ciao', 'sono','Matteo']        output=[1,2,3,'ciao','sono','Matteo']


// let arr1 = [1,2,3] ;

// let arr2=['ciao', 'sono','Matteo'] ;

// function merge (arr1, arr2){
//     return [...arr1,...arr2]
// }


// let arr1 = [1,2,3] ;

// let arr2=['ciao', 'sono','Matteo'] ;

// let arr3 = merge(arr1,arr2);
// console.log(arr3);

// function merge (arr1,arr2){  

//     let arr3 = arr1.concat(arr2); 

//     return console.log(arr3);

// } 

// merge(arr1,arr2)




// ESERCIZIO N°5


// Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array che contenga soltanto i numeri superiori alla media di tutti i numeri presenti nell'array.
// Es: arr=[1,2,3]      media=2       output=[3]


// let num = [1,2,3] ;

// function superior(num){
//     let media = num.reduce((acc,num) => acc+num) / num.length;
//     console.log(media);
//     let overMedia = num.filter((num) => num > media)
//     console.log(overMedia);
// }

// superior(num);



// ESERCIZIO N°6
// Scrivere una funzione che prenda in ingresso un numero N, un valore minimo ed un valore massimo e mi restituisca un array con all'interno N numeri casuali compresi tra il minimo ed il massimo.
// Es: N=3  min=1  max=5       output= [5, 1, 3]


// function random(N, min, max){

//     let pool = []
//         for(i= 0; i < N; i++){
//             let nunzio = Math.floor(Math.random()* (max-min +1)) + min 
//             pool.push(nunzio)
//         }

//         console.log(pool);

// }

// random(3,1,5)


// ESERCIZIO N°7

// Realizzare un oggetto che rappresenti una sfida ai dadi. Questo oggetto deve avere una lista di giocatori con tanto di nome e punteggi che hanno ottenuto. Implementare un metodo che permetta di decretare un vincitore (l'esercizio bowling visto a lezione sicuramente vi sara' di aiuto)
// Caricare gli esercizi svolti in una repository e postare il link sul canale qui su discord



