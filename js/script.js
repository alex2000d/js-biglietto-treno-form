


// recupero il pulsante presente nella from per generare il biglietto
let btn = document.getElementById('generator');
btn.addEventListener('click', function (){
  let name = document.getElementById('name').value
  let km = document.getElementById('km').value
  let age = document.getElementById('age').value
  
  
  let prezzo_biglietto = 0.21 * km;
  console.log(prezzo_biglietto);
  let prezzo_finale = prezzo_biglietto
  
  console.log(age);
  if (age === 'minorenne') {
    // se il passeggero e minorenne applico uno sconto del 20%
    let sconto = prezzo_biglietto * 20 / 100;
    prezzo_finale = prezzo_finale - sconto;
    

}
else if (age === 'over') {
    // se il passeggero è over 65 applico uno sconto del 40%
    let sconto = prezzo_biglietto * 40 / 100;
    prezzo_finale = prezzo_finale - sconto;
    
   
}
let message =`<h4>${name}</h4>`;
document.getElementById('message').innerHTML = message;
let price =`<p>${prezzo_finale.toFixed(2)}</p>`;
document.getElementById('price').innerHTML = price;
console.log(prezzo_finale);
})


 



  




