'use strict';

var pikeAndFirst = {
  open: 6,
  close: 8,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  cookieTime: function() {
    var hoursOfOperation = 12 - this.open + this.close;
    for(var i = 0; i < hoursOfOperation; i++) {
      var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      var howManyCookiesBought = Math.round(this.avgCookieSale * randomCustomerNumber);
      // get location of parent
      var ulEl = document.getElementById('pikeAndFirst');
      // create an element
      var liEl = document.createElement('li');
      if (this.open + i > 12) {
        liEl.textContent = (this.open + i - 12) + 'pm: ' + howManyCookiesBought + ' cookies';
      } else {
        // give the element content
        liEl.textContent = this.open + i + 'am: ' + howManyCookiesBought + ' cookies';
      }
      // append the element
      ulEl.appendChild(liEl);
    }
  }
};
pikeAndFirst.cookieTime();


// var hoursOfOperation = 12 - 6 + 8;
// for(var i = 0; i < hoursOfOperation; i++) {
//   var randomCustomerNumber = Math.floor(Math.random() * (65 - 23) + 23);
//   var howManyCookiesBought = Math.round(6.3 * randomCustomerNumber);
//   // get location of parent
//   var ulEl = document.getElementById('pikeAndFirst');
//   // create an element
//   var liEl = document.createElement('li');
//   if (6 + i > 12) {
//     liEl.textContent = (6 + i - 12) + 'pm: ' + howManyCookiesBought + ' cookies';
//   } else {
//     // give the element content
//     liEl.textContent = 6 + i + 'am: ' + howManyCookiesBought + ' cookies';
//   }
//   // append the element
//   ulEl.appendChild(liEl);
// }


// Still need to add total cookies


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