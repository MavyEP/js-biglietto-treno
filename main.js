//chiedere all'utente il numero di chilometri che desidera percorrere
var chilometri_utente = prompt("Quanti Km desidera percorrere?")
console.log (chilometri_utente)
//chiedere all'utente la propria eta
var eta_utente = prompt("Quanti anni ha?")
console.log(eta_utente)
// prezzo del Biglietto
var prezzobiglietto_utente = (chilometri_utente * 0.21)
console.log(prezzobiglietto_utente)

//calcolo del prezzo finale in base all'eta dell'utente
if (eta_utente < 18 ) {
    //se é l' utente é minore di 18 anni ha uno sconto del 20% sul biglietto
    console.log("Il prezzo del biglietto é : " + (prezzobiglietto_utente - ((prezzobiglietto_utente / 100) * 20)  + " €"))
    //stampainHTML
    document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto é : " + (prezzobiglietto_utente - ((prezzobiglietto_utente / 100) * 20))  + " €"
}
else if (eta_utente > 65 ) {
    //se é l' utente é maggiore di 65 anni ha uno sconto del 60% sul biglietto
    console.log( "Il prezzo del biglietto é : " + (prezzobiglietto_utente - ((prezzobiglietto_utente / 100) * 60))  + " €")
    //stampainHTML
    document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto é : " + (prezzobiglietto_utente - ((prezzobiglietto_utente / 100) * 60))  + " €"
}
else {
    //se non é ne un minorenne ne un over 65 il prezzo del biglietto resta invariato
    console.log("Il prezzo del biglietto é : " + prezzobiglietto_utente   + " €")
    //stampainHTML
    document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto é : " + prezzobiglietto_utente   +  " €";
}
