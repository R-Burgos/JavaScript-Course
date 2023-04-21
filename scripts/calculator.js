let calculation = localStorage.getItem('calculation') || '';

displayCartQuantity();

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  localStorage.setItem('calculation', calculation);
  displayCartQuantity();
}

function displayCartQuantity() {
  const currentDisplay = document.querySelector('.display').innerHTML;

  if(currentDisplay === '') {
    document.querySelector('.display').innerHTML = '0';
  } else {
    document.querySelector('.display').innerHTML = calculation;
  }
}