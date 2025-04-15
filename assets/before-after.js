window.addEventListener('DOMContentLoaded', (event) => {
    let slider =  document.querySelector('#slider')
     slider.addEventListener('input' , (e)=> {
          let sliderValue =  slider.value;
          document.querySelector('.after').style.clipPath = `polygon(0 0, ${sliderValue}% 0 , ${sliderValue}% 100%, 0 100% )`
      
      })
  });
  