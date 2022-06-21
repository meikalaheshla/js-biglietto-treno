
const travelLenght = parseInt(prompt('Lunghezza del percorso in Km', 23));
const travelerAge = parseInt(prompt('Età del passeggero1', 15));
const priceForKm = 0.21;
let discountedTicketPrice;


// VERIFICA INPUT
if (isNaN(travelLenght) || isNaN(travelerAge)) {
    alert(`Inserire solo valori numerici`)

};


console.log(travelLenght, travelerAge, typeof travelLenght);

// BIGLIETTO PREZZO PIENO

const fullTicketPrice = (travelLenght * priceForKm).toFixed(2);

// HTML OUTPUT

document.getElementById("full-ticket-price").innerText = `Il prezzo del biglietto intero è € ${fullTicketPrice}`;

// CONSOLE OUT

console.log(`Il prezzo del biglietto intero è € ${fullTicketPrice}`);

// BIGLIETTO SCONTATO PER GIOVANI

if (travelerAge < 18) {
    discountedTicketPrice = (fullTicketPrice - (fullTicketPrice / 100) * 20).toFixed(2);

    const discountDisclaimer = `complimenti!, il tuo biglietto invece costa € ${discountedTicketPrice} perchè hai ${travelerAge} anni`;
    // CONSOLE OUTPUT

    console.log(discountDisclaimer);

    // HTML OUTPUT

    document.getElementById("discounted-ticket-price").innerText = discountDisclaimer

    // BIGLIETTO SCONTATO PER ANZIANI

}
if (travelerAge > 65) {
    discountedTicketPrice = (fullTicketPrice - (fullTicketPrice / 100) * 40).toFixed(2);

    const discountDisclaimer = `complimenti!, il tuo biglietto invece costa € ${discountedTicketPrice} perchè hai ${travelerAge} anni`;
    // CONSOLE OUTPUT

    console.log(discountDisclaimer)

    // HTML OUTPUT

    document.getElementById("discounted-ticket-price").innerHTML = discountDisclaimer
}