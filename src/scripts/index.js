//SCRIPT IMPORTS//
import handleUserChoice from './slider.js';
import verifyInput from './inputValidation.js';
import changeSliderText from './slider_changeText.js';

const minInput = document.getElementById('minimum');
const maxInput = document.getElementById('maximum');
const quantityInput = document.getElementById('quantityOfNumbers');
const button = document.getElementById('submitBtn');
const results= document.getElementById('results');


button.addEventListener('click', (e) =>{
    let min= parseInt(minInput.value);
    let max= parseInt(maxInput.value);
    let quantity= parseInt(quantityInput.value);
    verifyInput(max, min, quantity);
    
    let showRandom = handleUserChoice(min, max, quantity);
    console.log(showRandom);
    results.innerHTML = showRandom;
})
