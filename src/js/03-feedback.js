import throttle from 'lodash.throttle';

const FORM_KEY = 'feedback-form-state';
// обєкт, що має виводитись
const formData = {};

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const savedData = localStorage.getItem(FORM_KEY);
testSave();

form.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(event) {
  formData[event.target.name] = event.target.value;

  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function testSave() {
  if (JSON.parse(savedData)) {
    console.log(JSON.parse(savedData));
    input.value = JSON.parse(savedData).email;
    textarea.value = JSON.parse(savedData).message;
  }
}

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(savedData));
  event.currentTarget.reset();
  localStorage.removeItem(FORM_KEY);
}



// додати тротл на onFormInput
// запарсити JSON