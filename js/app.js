'use strict';

var pikeAndFirst = {
  open: 6,
  close: 8,
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  hourlySaleArray: [],
  cookieTime: function() {
    var hoursOfOperation = 12 - this.open + this.close;
    var totalCookiesSold = 0;
    for(var i = 0; i <= hoursOfOperation; i++) {
      // Generates random number of customer for that hour
      var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      // Calculates the amount of cookies sold that hour
      var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
      // Add to total cookie count
      totalCookiesSold += cookiesSoldByHour;
      // push into the array to store data
      this.hourlySaleArray.push(cookiesSoldByHour);
      // get location of parent
      var ulEl = document.getElementById('pikeAndFirst');
      // create an element
      var liEl = document.createElement('li');
      // if afternoon put pm and change back from military time, if before noon put am and give the list item the content
      if (this.open + i > 12) {
        liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
      } else if (this.open + i < 12){
        // give the element content
        liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
      } else {
        liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
      }
      // append the element
      ulEl.appendChild(liEl);
    }
    this.hourlySaleArray.push(totalCookiesSold);
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var seaTacAir = {
  open: 6,
  close: 8,
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  hourlySaleArray: [],
  cookieTime: function() {
    var hoursOfOperation = 12 - this.open + this.close;
    var totalCookiesSold = 0;
    for(var i = 0; i <= hoursOfOperation; i++) {
      var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
      totalCookiesSold += cookiesSoldByHour;
      this.hourlySaleArray.push(cookiesSoldByHour);
      var ulEl = document.getElementById('seaTacAir');
      var liEl = document.createElement('li');
      if (this.open + i > 12) {
        liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
      } else if (this.open + i < 12) {
        // give the element content
        liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
      } else {
        liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
      }
      ulEl.appendChild(liEl);
    }
    this.hourlySaleArray.push(totalCookiesSold);
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};


var seattleCenter = {
  open: 6,
  close: 8,
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  hourlySaleArray: [],
  cookieTime: function() {
    var hoursOfOperation = 12 - this.open + this.close;
    var totalCookiesSold = 0;
    for(var i = 0; i <= hoursOfOperation; i++) {
      var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
      totalCookiesSold += cookiesSoldByHour;
      this.hourlySaleArray.push(cookiesSoldByHour);
      var ulEl = document.getElementById('seattleCenter');
      var liEl = document.createElement('li');
      if (this.open + i > 12) {
        liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
      } else if (this.open + i < 12) {
        // give the element content
        liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
      } else {
        liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
      }
      ulEl.appendChild(liEl);
    }
    this.hourlySaleArray.push(totalCookiesSold);
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var capitolHill = {
  open: 6,
  close: 8,
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  hourlySaleArray: [],
  cookieTime: function() {
    var hoursOfOperation = 12 - this.open + this.close;
    var totalCookiesSold = 0;
    for(var i = 0; i <= hoursOfOperation; i++) {
      var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
      totalCookiesSold += cookiesSoldByHour;
      this.hourlySaleArray.push(cookiesSoldByHour);
      var ulEl = document.getElementById('capitolHill');
      var liEl = document.createElement('li');
      if (this.open + i > 12) {
        liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
      } else if (this.open + i < 12) {
        // give the element content
        liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
      } else {
        liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
      }
      ulEl.appendChild(liEl);
    }
    this.hourlySaleArray.push(totalCookiesSold);
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};

var alki = {
  open: 6,
  close: 8,
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  hourlySaleArray: [],
  cookieTime: function() {
    var hoursOfOperation = 12 - this.open + this.close;
    var totalCookiesSold = 0;
    for(var i = 0; i <= hoursOfOperation; i++) {
      var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
      var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
      totalCookiesSold += cookiesSoldByHour;
      this.hourlySaleArray.push(cookiesSoldByHour);
      var ulEl = document.getElementById('alki');
      var liEl = document.createElement('li');
      if (this.open + i > 12) {
        liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
      } else if (this.open + i < 12) {
        // give the element content
        liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
      } else {
        liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
      }
      ulEl.appendChild(liEl);
    }
    this.hourlySaleArray.push(totalCookiesSold);
    liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
    ulEl.appendChild(liEl);
  }
};

pikeAndFirst.cookieTime();
seaTacAir.cookieTime();
seattleCenter.cookieTime();
capitolHill.cookieTime();
alki.cookieTime();



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