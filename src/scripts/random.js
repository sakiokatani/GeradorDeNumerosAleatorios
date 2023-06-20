

function randomNumbers(min, max, quantity){


    let result = [];
    
    for (let i = 0; i >= 0 && i < quantity*5; i++){
        let number = Math.floor((Math.random() * (max - min + 1))+ min);
        result.push(number)
    }
    
    return result;
};