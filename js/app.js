const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelector('#buttons-container button');

class Calculadora {}

buttons.forEach((btn) => {
     btn.addEventListener("click", (e) => {
          const value = e.target.innerText;

          console.log(value);
     })
     
});