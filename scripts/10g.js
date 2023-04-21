function toggle(selection) {
  const buttonElement = document.querySelector(selection);

  classCheck(buttonElement);
}


function classCheck (buttonElement) {
  if (!buttonElement.classList.contains('is-toggled')) {
    checkButtons();
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function checkButtons () {
  const previousButton = document.querySelector('.is-toggled');

  if(previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}
