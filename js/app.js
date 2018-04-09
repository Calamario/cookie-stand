'use strict';

var pikeAndFirst = {
  open: 6,
  close: 8,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
};


function() {
  var hoursOfOperation = 12 - this.open + this.close;
  for(var i = 0; i < hoursOfOperation; i++) {
    var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    var howManyCookiesBought = this.avgCookieSale * randomCustomerNumber;
    // get location of parent
    var ulEl = document.getElementById('pikeAndFirst');
    // create an element
    var liEl = document.createElement('li');
    // give the element content
    liEl.textContent = this.open + i + ': ' + howManyCookiesBought + ' cookies';
    // append the element
    ulEl.appendChild(liEl);
  }
}



// Makes a random number
// function randomNumberGenerator() {
//   var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//   return randomCustomerNumber;
// }

// Used to show on webpage text created in JS
// function renderSales() {
//   // get location of parent
//   var ulEl = document.getElementById('pikeAndFirst');
//   // create an element
//   var liEl = document.createElement('li');
//   // give the element content
//   liEl.textContent = '6am: 16 cookies';
//   // append the element
//   ulEl.appendChild(liEl);
// }
// renderSales();