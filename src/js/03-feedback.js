import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.entries(parsedData).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  }
};

const saveFormData = () => {
  const email = feedbackForm.elements.email.value;
  const message = feedbackForm.elements.message.value;
  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

feedbackForm.addEventListener('input', throttle(saveFormData, 500));

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  feedbackForm.reset();
});

document.addEventListener('DOMContentLoaded', populateForm);

