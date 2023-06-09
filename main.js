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

//         tabellina(2);




// ESERCIZIO 3


// Scrivere una funzione che prenda in ingresso un array di nomi e me lo restituisca in ordine alfabetico

// let nomi = ["Alberto" , "Pasquale" , "Gabriele" , "Morris"];
// let nomi2 = riordina(nomi);

// function riordina(nomi){
//     return nomi.sort()
// }

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



// function unione (arr1,arr2){  

//     let arr3 = arr1.concat(arr2); 

//     console.log(arr3);

// } 

// unione(arr1,arr2)




// ESERCIZIO N°5


// Scrivere una funzione che prenda in ingresso un array di numeri e mi restituisca un nuovo array che contenga soltanto i numeri superiori alla media di tutti i numeri presenti nell'array.
// Es: arr=[1,2,3]      media=2       output=[3]


// let num = [1,2,3] ;

// function superior(num){
//     let media = num.reduce((acc,num) => acc+num) / num.length;
//     // console.log(media);
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
//             let numrandom = Math.floor(Math.random()* (max-min +1)) + min 
//             pool.push(numrandom)
//         }

//         console.log(pool);

// }

// random(3,1,5)


// ESERCIZIO N°7

// Realizzare un oggetto che rappresenti una sfida ai dadi. Questo oggetto deve avere una lista di giocatori con tanto di nome e punteggi che hanno ottenuto. Implementare un metodo che permetta di decretare un vincitore (l'esercizio bowling visto a lezione sicuramente vi sara' di aiuto)
// Caricare gli esercizi svolti in una repository e postare il link sul canale qui su discord



// salvo in una variabile "dadi" un oggetto che conterrà: 
// un array di oggetti 
// una serie di metodi e istruzioni 

const dadi = {
    
    // creo un array di oggetti "giocatori" che conterrà un nome e un array vuoto (punteggio)
    
    
    giocatori : [
        
        {name: 'Pasquale', punteggio:[]},
        {name: 'Lorenzo', punteggio:[]},
        {name: 'Mattia', punteggio:[]},
    ],
    
    //creo una funziona per sommare i punteggi generati nella prima funzione
    
    
    setPunteggioFinale: function(){
        
        // devo ciclare su ogni giocatore
        
        this.giocatori.forEach((giocatore)=>{
            
            // sovrascrivo il valore punteggio trasformandolo da un array di numeri alla somma di quei numeri utilizzando il metodo .reduce()
            
            giocatore.punteggioFinale = giocatore.punteggio.reduce((acc,n)=> acc + n);
            
            
        });
        
        console.log(this.giocatori);
        
    },
    
    
    // creo una funzione per assegnare un punteggio casuale a ogni giocatore
    
    
    setPunteggio: function(){
        
        // devo ciclare su ogni giocatore 
        
        
        this.giocatori.forEach((giocatore)=>{
            
            // uso il ciclo for per pushare all'interno dall'array vuoto (punteggio) il punteggio di ogni lancio. 
            
            for(let i = 1; i <=6; i ++){
                
                //con il metodo push riempiamo l'array vuoto (punteggio) con il punteggio random.
                
                giocatore.punteggio.push( Math.floor(Math.random() * ( 6 - 1 + 1 ) + 1))
            }
        });
        
    },
    
    
    
    
    
    // metodo con .sort()
    
    // mi creo una funzione per settare il vincitore
    
    setVincitore: function(){
        
        // utilizzo il metodo .sort(a,b)=> b - a) per ordinare in ordine crescente il mio array
        // nelle istruzioni specifico che il confronto va fatto sul punteggio finale degli elementi presi in considerazione (b.punteggioFinale - a.PunteggioFinale)
        
        console.log(this.giocatori.sort( (a,b)=> b.punteggioFinale - a.punteggioFinale))
        
        // mi creo una variabile col vincitore in posizione zero [0]
        
        
        let vincitore = this.giocatori[0];
        
        // faccio un confronto tra il punteggioFinale del giocatore in posizione zero e quello del giocatore in posizione uno
        
        if(vincitore.punteggioFinale > this.giocatori[1].punteggioFinale){
            
            console.log(`Il giocatore ${vincitore.name} ha ottenuto un punteggio finale di ${vincitore.punteggioFinale} e ha vinto la partita!`);
            
            
            
        }else{
            
            console.log("La partita è terminata con un pareggio");
            
        }
        
        
    }
    
    
    
};






dadi.setVincitore();
dadi.setPunteggio();
dadi.setPunteggioFinale();















// console.log(dadi);
//     let vincitore = this.giocatori[0];

//     this.giocatori.forEach((giocatore)=>{

//         if( giocatore.punteggioFinale > vincitore.punteggioFinale){

//             vincitore = giocatore;
//         }
//     });