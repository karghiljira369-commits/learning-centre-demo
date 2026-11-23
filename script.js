const enquiryForm = document.getElementById('enquiry-form');
const formMessage = document.getElementById('form-message');

enquiryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Demo complete. Your enquiry has not been sent or saved.';
});
