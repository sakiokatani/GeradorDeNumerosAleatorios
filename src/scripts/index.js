//SCRIPT IMPORTS//
import {randomNumbers, filterResults} from './random.js';
import verifyInput from './inputValidation.js'

const minInput = document.getElementById('minimum');
const maxInput = document.getElementById('maximum');
const quantityInput = document.getElementById('quantityOfNumbers');
const button = document.getElementById('submitBtn');
const results= document.getElementById('results');


button.addEventListener('click', (e) =>{
    let min= parseInt(minInput.value);
    let max= parseInt(maxInput.value);
    let quantity= parseInt(quantityInput.value);
    e.preventDefault;
    verifyInput(max, min, quantity);
    let showRandom = randomNumbers(min, max, quantity);
    console.log(showRandom);
        return results.innerHTML=filterResults(min, max, quantity);
    })

