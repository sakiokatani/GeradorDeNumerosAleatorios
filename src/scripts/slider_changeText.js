const slider = document.getElementById('slider');
const rangeIndicator = document.querySelector('.valueText');



export default function changeSliderText(position){
    slider.addEventListener('input', function(){
    slider.classList.add('active')});
    const range = slider.value;
    rangeIndicator.textContent = 'Todos';

    if(slider.classList.contains('active')){          
          // Calculate the position based on the slider's range
          const sliderWidth = slider.clientWidth;
          console.log(sliderWidth)
          const sliderMax = parseFloat(slider.max);
        //   let position = (range / sliderMax) * sliderWidth;
          if(range === '3'){
              position = slider.clientWidth - (slider.clientWidth)*sliderMax/6;
              rangeIndicator.textContent = 'Ímpar'
            }if(range === '2'){
                position = slider.clientWidth - (slider.clientWidth);
                rangeIndicator.textContent = 'Todos'
            }else if(range==='1'){
                position = (slider.clientWidth) - (slider.clientWidth) * sliderMax/2;
                rangeIndicator.textContent = 'Par'
          }
          
          // Set the left position of the indicator
          rangeIndicator.style.left = `${position}px`;
    }
}