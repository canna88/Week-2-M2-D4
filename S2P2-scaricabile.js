// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer 
(il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, 
PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, 
aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) 
la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

// Dichiaro le seguenti variabili:
let totalPricesSum = 0 // la somma di tutti i prezzi
const discount = 0.3 // lo sconto del 30%
let totalCheckOut = 0 // il totale del carrello finale


// Calcolo il totale del carello
for (let i = 0; i < prices.length; i++) {
  totalPricesSum += (prices[i])
}

console.log(totalPricesSum)

//Creo un ciclo
if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
  if (totalPricesSum > 100) {
    totalCheckOut = totalPricesSum *(1-discount)
  } else {
    totalCheckOut = (totalPricesSum *(1-discount)) + shippingCost
  }
} else {
  if (totalPricesSum > 100) {
    totalCheckOut = totalPricesSum
  } else {
    totalCheckOut = totalPricesSum + shippingCost
  }
}

console.log(totalCheckOut)

// Array contenente gli utenti e .push() dei vari utenti; creo anche l'array ambassadors
const utenti = []
utenti.push(marco,paul,amy)
const ambassadors = []

// Ciclo
for (let j = 0; j < utenti.length; j++) {
  if (utenti[j].isAmbassador === true) {
    console.log(utenti[j].name,utenti[j].lastName," is an ambassador")
    ambassadors.push(utenti[j])
  } else {
    console.log(utenti[j].name,utenti[j].lastName," is not an ambassador")
  }
}

console.log(ambassadors)

// OPPPURE scrivo il for utilizzando OF

// creo anche l'array ambassadors2 per evitare che il valore venga aggiunto al precedente array ambassadors
let ambassadors2 = []

// Ciclo
for (let utente of utenti) {
  if (utente.isAmbassador === true) {
    console.log(utente.name,utente.lastName," is an ambassador")
    ambassadors2.push(utente)
  } else {
    console.log(utente.name,utente.lastName," is not an ambassador")
  }
}

console.log(ambassadors2)