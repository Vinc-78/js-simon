// mostra i numeri estratti
let numeriPc = numeriEstratti()

let numeriUtente = []

console.log(numeriPc)



// parte il conteggio di 30 secondi

/* let contatore = 30;

const clock = setInterval(() => {
   console.log("mancano ", contatore, "secondi")
   contatore--;

   

   if (contatore === 0) {

       // azzera il timer e fa la verifica
       clearInterval(clock);
       verifica(numeriPc, numeriUtente);
       

   }

}, 1000); 
*/


const chiedi = setTimeout(startChiedi, 30000);

function startChiedi() {
    // passato il tempo di 30 secondi chiede i numeri e fa la verifica 
    numeriUtente = ChiediNumeri()
    console.log(numeriUtente)
    verifica(numeriPc, numeriUtente);


}



// funzione che porta a schermo un allert di 5 numeri in forma leggibile 
//e mantiene un array degli stessi numeri 

function numeriEstratti() {

    let numeriEstratti = [];

    for (let i = 0; i < 5; i++) {
        let estratto = numRandom();

        numeriEstratti.push(estratto);
    }


    numeriDaVisualizzare = [...numeriEstratti];

    numeriDaVisualizzare = numeriDaVisualizzare.toString()

    numeriDaVisualizzare = numeriDaVisualizzare.replaceAll(",", "  ")


    alert("vediamo quanti numeri ricordi  i numeri che devi ricordare sono:    " + numeriDaVisualizzare)

    return numeriEstratti;


}



//una funzione che estra un numero a caso da 1 a 100
function numRandom() {
    let num = Math.ceil(Math.random() * 100);
    return num;
}





// funzione che chiede i numeri all'utente e controlla che siano numeri e che non siano ripetuti

function ChiediNumeri() {

    let arrayUtente = [];

    for (let i = 0; i < 5; i++) {
        let numero = prompt("Inserisci 5 numeri da 1 a 100");

        if (isNaN(numero) || (numero > 100)) {
            alert("il numero inserito non vale, !!! Attento che il tempo passa !!! ");
            i--;
        } else if (arrayUtente.includes(numero)) {
            alert("numero già inserito, Inserisci un numero diverso")
            i--;
        }

        else {
            numero = parseInt(numero);
            arrayUtente.push(numero);
        }
    }

    return arrayUtente;


}
/**
 * 
 * @param {Array} arrayEstratti 
 * @param {Array} arrayNdati 
 */


function verifica(arrayEstratti, arrayNdati) {

    let punti = 0;

    for (i = 0; i < arrayNdati.length; i++) {

        if (arrayEstratti.includes(arrayNdati[i])) {
            punti++;
        }
    }

    console.log("Hai ricordato :", punti, "numeri")

    if (punti === 0) {
        alert("Non ne hai ricordato neanche uno :( Prova Ancora...")

    } else if (punti < 5) {
        alert("hai ricordato " + punti + " numeri ")

    } else if (punti === 5) {
        alert("!!! Complimenti li hai ricordati tutti !!! :) ")

    }

}