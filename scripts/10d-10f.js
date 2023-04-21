function toggle(selection) {
  const buttonElement = document.querySelector(selection);

  checkClass(buttonElement);
}

function checkClass(buttonElement) {
  if(!buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}