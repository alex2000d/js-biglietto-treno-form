


// recupero il pulsante presente nella from per generare il biglietto
let btn = document.getElementById('generator');
btn.addEventListener('click', function (){
  let name = document.getElementById('name').value
  let km = document.getElementById('km').value
  let eta = document.getElementById('age').value

  
  let prezzo_biglietto = 0.21 * km;
  let prezzo_finale = prezzo_totale
  let message = prezzo_finale;
  if (age < 18) {
    // se il passeggero e minorenne applico uno sconto del 20%
    let sconto = prezzo_biglietto * 20 / 100;
    prezzo_finale = prezzo_finale - sconto;
    let message = message + prezzo_finale;

}
else if (age > 65) {
    // se il passeggero è over 65 applico uno sconto del 40%
    let sconto = prezzo_biglietto * 40 / 100;
    prezzo_finale = prezzo_finale - sconto;
    let message = message + prezzo_finale;

}
})





  




