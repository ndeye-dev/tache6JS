
let choix = 10;

function compteurNumber() {
    document.getElementById('essaie').textContent = choix;

    if (choix < 0) {
        choix = 0
    }
  
}
const bouton = document.getElementById('butn');

document.getElementById('essaie').innerText = choix;

let random = Math.floor(Math.random() * (100)) + 10; //10 et 100
console.log(random);

//function
document.getElementById('butn').addEventListener('click', function(e){
e.preventDefault();

document.getElementById('butn').addEventListener('click', compteurNumber);

choix --;
document.getElementById('essaie').textContent = choix;

let nombreInput = document.querySelector('#nombre').value;
let nombre = parseInt(nombreInput, 10); // Convertit la valeur en nombre entier

if (nombre === random) {
    document.getElementById('paragraphe1').innerText = 'Bravooo! Le nombre saisi est égal au nombre aléatoire!';
    bouton.disabled = true; 

} else if (nombre < random) {
    document.getElementById('paragraphe1').innerText = 'Le nombre saisi est plus petit ';

}else if (nombre > random) {
    document.getElementById('paragraphe1').innerText = 'Le nombre saisi est plus grand  '; 

}
else {
    document.getElementById('paragraphe1').innerText = 'Essayez encore!';
}
compteurNumber();
})
// for (let i = 0; i < choix; i++){
//     console.log(i);
// }