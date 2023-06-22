import {randomNumbers} from './random.js';
import changeSliderText from './slider_changeText.js';

const minInput = document.getElementById('minimum');
const maxInput = document.getElementById('maximum');
const quantityInput = document.getElementById('quantityOfNumbers');
const slider = document.getElementById('slider');
const position =  slider.clientWidth - (slider.clientWidth);
const rangeIndicator= document.querySelector('.valueText');
    rangeIndicator.style.left = `${position}px`;

slider.onchange = function(){
    slider.classList.add('active');
    changeSliderText();
}

export default function handleUserChoice(min, max, quantity){
    let resultArray = randomNumbers(min, max, quantity);
        console.log(resultArray);
    let rangeResultArray = [];
    if (slider.classList.contains('active')){
        
            var range = parseInt(slider.value);
            console.log(range);

            if(range===1){
                console.log('range1')
                rangeResultArray= Array.from(filterByEven(resultArray,min ,max, quantity));
            }
            if(range===2){
                console.log('range2')
                rangeResultArray = Array.from(filterAll(resultArray,min ,max, quantity));
            }
            if(range===3){
                console.log('range3')
                rangeResultArray = Array.from(filterByOdd(resultArray,min ,max, quantity));
            }
    
    }else{
        console.log('inactive')
        rangeResultArray = Array.from(filterAll(resultArray,min ,max, quantity));
        }
            
    console.log(rangeResultArray)
    let resultString = rangeResultArray.sort(function(a,b){ return a-b});
     resultString = rangeResultArray.join('  ');
    console.log(resultString)   
    return resultString;
}
           

function filterByEven(resultArray,min ,max, quantity){
    let filteredbyEven = [] 
    for (let j=0; j <= resultArray.length+1 ; j++){
        let number = resultArray[j];
          
        if(!filteredbyEven.includes(number) && filteredbyEven.length < quantity){
                if((number%2) === 0){
                filteredbyEven.push(number);
                for(let index=0; index < filteredbyEven.length; index++){
                    if (((index+1) % 7) === 0) {
                        filteredbyEven[index]= number +'<br>'
                    }
                }      
                }
        }
    }
        return filteredbyEven ;    
}

function filterByOdd (resultArray,min ,max, quantity){
    let filteredbyOdd = [] 
    for (let j=0; j <= resultArray.length+1 ; j++){
        let number = resultArray[j];
          
        if(!filteredbyOdd.includes(number) && filteredbyOdd.length < quantity){
                if((number%2) !== 0){
                    filteredbyOdd.push(number);
                for(let index=0; index < filteredbyOdd.length; index++){
                    if (((index+1) % 7) === 0) {
                        filteredbyOdd[index]= number +'<br>'
                    }
                }      
                }
        }
    }
        return filteredbyOdd ;    
}


function filterAll(resultArray,min ,max, quantity){
    let filteredAll = []   
    for (let j=0; j <= resultArray.length ; j++){
        let number = resultArray[j];
        
        if(!filteredAll.includes(number) && filteredAll.length < quantity){
            filteredAll.push(number);
                for(let index=0; index < filteredAll.length; index++){
                    if (((index+1) % 7) === 0) {
                        filteredAll[index]= number +'<br>'
                    }
                }
        }
    }
    console.log(filteredAll)
    return filteredAll;
}