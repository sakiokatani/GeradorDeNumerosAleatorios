
function randomNumbers(min, max, quantity){
    let result = [];
    
    for (let i = 0; i >= 0 && i < 200; i++){
        let number = Math.floor((Math.random() * (max - min + 1))+ min);
        result.push(number)
    }
    
    return result;
};

function filterResults(min, max, quantity){
    let resultArray = randomNumbers(min, max, quantity);
    let showresult=[];
    console.log(showresult);
    for (let j=0; j <= resultArray.length ; j++){
        let number = resultArray[j];

        if((number >= min && number<= max) && !showresult.includes(number) && showresult.length<quantity){
            showresult.push(number);
            for(let index=0; index< showresult.length; index++){
                if (((index+1) % 7) === 0) {
                    console.log('entered if statement');
                    showresult[index]=number+'<br>';
            }
        }
        };
        
      }



    let resultString = showresult.join('  ');
    console.log(resultString)

    

    
    return resultString;
}

const filtered = filterResults()
console.log(filtered)

export {randomNumbers, filterResults};