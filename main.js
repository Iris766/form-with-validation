const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const successBox = document.querySelector('.success-box');

function showSuccessBox() {
  successBox.style.display = 'block';
  setTimeout(function () {
    successBox.style.display = 'none';
  }, 2500);
}

function showError(input) {
  input.nextElementSibling.style.display = 'block';
  setTimeout(function () {
    input.nextElementSibling.style.display = 'none';
  }, 3000);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (nameInput.value === '') {
    showError(nameInput);
  }
  if (emailInput.value === '') {
    showError(emailInput);
  }
  if (passwordInput.value === '') {
    showError(passwordInput);
  }
  if (confirmPasswordInput.value === '') {
    showError(confirmPasswordInput);
  } else {
    showSuccessBox();
  }
});
