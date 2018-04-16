'use strict';

function openSalesPage(event) {
  event.preventDefault();
  var formEl = event.target;
  if (formEl.username.value === 'PatEmployee' && formEl.password.value === 'LoveSalmon') {
    window.location.href = '../sales.html';
  } else {
    console.log('hello');
    alert('Incorrect Username/Password');
  }
}

var formEl = document.getElementById('loginToEmployee');
formEl.addEventListener('submit', openSalesPage);

var titleEl = document.getElementById('my-container');
titleEl.addEventListener('click', function() {
  window.location.href = '../index.html';
});