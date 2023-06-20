const FindInputFields = document.querySelectorAll('input');
const inputFields = Array.from(FindInputFields);

export default function verifyInput(max, min, quantity){
    if(isNaN(min) || min === null || min === ''||
        isNaN(max) || max === null || max === ''||
        isNaN(quantity) || quantity === null || quantity === ''){
        inputFields.forEach((field) => {
        if(field === minimum){
            field.classList.add('invalid');
            field.setCustomValidity('Todos os campos são obrigatórios');
            field.reportValidity();
        }
        if(field === maximum){
            field.classList.add('invalid');
            field.setCustomValidity('Todos os campos são obrigatórios');
            field.reportValidity();
        }
        if(field === quantityOfNumbers){
            field.classList.add('invalid');
            field.setCustomValidity('Todos os campos são obrigatórios');
            field.reportValidity();
        }else{
            field.classList.remove('invalid');
            field.setCustomValidity("");
            field. reportValidity();
        }
    })
    }
    console.log('input verified')
    return;
};
