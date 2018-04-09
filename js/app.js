'use strict';

function renderSales() {
  // get location of parent
  var ulEl = document.getElementById('pikeAndFirst');
  // create an element
  var liEl = document.createElement('li');
  // give the element content
  liEl.textContent = '6am: 16 cookies';
  // append the element
  ulEl.appendChild(liEl);
}

renderSales();