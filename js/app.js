'use strict';
var timeOpen = 6;
var timeClose = 8;
var hoursOfOperation = 12 - timeOpen + timeClose;
var allStoreInfo = [];


// function OldStore(minCustomer, maxCustomer, avgCookieSale, parentLocation) {
//   this.open = 6;
//   this.close = 8;
//   this.minCustomer = minCustomer;
//   this.maxCustomer = maxCustomer;
//   this.avgCookieSale = avgCookieSale;
//   this.hourlySaleArray = [];
//   this.totalSold = 0;
//   // get location of parent
//   this.ulEl = document.getElementById(parentLocation);
//   this.cookieTime = function() {
//     var hoursOfOperation = 12 - this.open + this.close;
//     var totalCookiesSold = 0;
//     for(var i = 0; i <= hoursOfOperation; i++) {
//       // Generates random number of customer for that hour
//       var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       // Calculates the amount of cookies sold that hour
//       var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
//       // Add to total cookie count
//       totalCookiesSold += cookiesSoldByHour;
//       // push into the array to store data
//       this.hourlySaleArray.push(cookiesSoldByHour);
//       // create an element
//       var liEl = document.createElement('li');
//       // if afternoon put pm and change back from military time, if before noon put am and give the list item the content
//       if (this.open + i > 12) {
//         liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
//       } else if (this.open + i < 12){
//         // give the element content
//         liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
//       } else {
//         liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
//       }
//       // append the element
//       this.ulEl.appendChild(liEl);
//     }
//     this.totalSold = totalCookiesSold;
//     liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
//     this.ulEl.appendChild(liEl);
//   };
// }





function Store(storeName, minCustomer, maxCustomer, avgCookieSale) {
  this.storeName = storeName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookieSale = avgCookieSale;
  this.hourlySaleArray = [];
  this.totalSold = 0;
  allStoreInfo.push(this);
}

Store.prototype.calculateHourlyCookiesSold = function() {
  for(var i = 0; i <= hoursOfOperation; i++) {
    // Generates random number of customer for that hour
    var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
    // Calculates the amount of cookies sold that hour
    var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
    // push into the array to store data
    this.hourlySaleArray.push(cookiesSoldByHour);
  }
};

Store.prototype.calculateTotalCookiesAtStore = function() {
  var totalCookiesSold = 0;
  for(var i in this.hourlySaleArray) {
    // Add to total cookie count
    totalCookiesSold += this.hourlySaleArray[i];
  }
  this.totalSold = totalCookiesSold;
};

Store.prototype.renderRow = function () {
  var tBody = document.getElementById('hourlyCookie');
  var trEl = document.createElement('tr');
  trEl.textContent = this.storeName;
  for (var i in this.hourlySaleArray) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySaleArray[i] + ' cookies';
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = this.totalSold;
  trEl.appendChild(tdEl);
  tBody.appendChild(trEl);
};

var pikeAndFirst = new Store('1st & Pike', 23, 65, 6.3);
var seaTacAir = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

// // function to render time
// renderTime = function() {
//   var tHead = document.getElementById('time');
//   // create element
//   var thEl = document.createElement('th');
//   // give it a content
//   thEl.textContent = timeOpen + ':00am';
//   // apend the elemnet
//   tHead.appendChild(thEL);
// };











// var pikeAndFirst = {
//   open: 6,
//   close: 9,
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   hourlySaleArray: [],
//   cookieTime: function() {
//     var hoursOfOperation = 12 - this.open + this.close;
//     var totalCookiesSold = 0;
//     for(var i = 0; i <= hoursOfOperation; i++) {
//       // Generates random number of customer for that hour
//       var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       // Calculates the amount of cookies sold that hour
//       var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
//       // Add to total cookie count
//       totalCookiesSold += cookiesSoldByHour;
//       // push into the array to store data
//       this.hourlySaleArray.push(cookiesSoldByHour);
//       // get location of parent
//       var ulEl = document.getElementById('pikeAndFirst');
//       // create an element
//       var liEl = document.createElement('li');
//       // if afternoon put pm and change back from military time, if before noon put am and give the list item the content
//       if (this.open + i > 12) {
//         liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
//       } else if (this.open + i < 12){
//         // give the element content
//         liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
//       } else {
//         liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
//       }
//       // append the element
//       ulEl.appendChild(liEl);
//     }
//     this.hourlySaleArray.push(totalCookiesSold);
//     liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// };

// var seaTacAir = {
//   open: 6,
//   close: 9,
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   hourlySaleArray: [],
//   cookieTime: function() {
//     var hoursOfOperation = 12 - this.open + this.close;
//     var totalCookiesSold = 0;
//     for(var i = 0; i <= hoursOfOperation; i++) {
//       var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
//       totalCookiesSold += cookiesSoldByHour;
//       this.hourlySaleArray.push(cookiesSoldByHour);
//       var ulEl = document.getElementById('seaTacAir');
//       var liEl = document.createElement('li');
//       if (this.open + i > 12) {
//         liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
//       } else if (this.open + i < 12) {
//         // give the element content
//         liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
//       } else {
//         liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
//       }
//       ulEl.appendChild(liEl);
//     }
//     this.hourlySaleArray.push(totalCookiesSold);
//     liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// };


// var seattleCenter = {
//   open: 6,
//   close: 9,
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   hourlySaleArray: [],
//   cookieTime: function() {
//     var hoursOfOperation = 12 - this.open + this.close;
//     var totalCookiesSold = 0;
//     for(var i = 0; i <= hoursOfOperation; i++) {
//       var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
//       totalCookiesSold += cookiesSoldByHour;
//       this.hourlySaleArray.push(cookiesSoldByHour);
//       var ulEl = document.getElementById('seattleCenter');
//       var liEl = document.createElement('li');
//       if (this.open + i > 12) {
//         liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
//       } else if (this.open + i < 12) {
//         // give the element content
//         liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
//       } else {
//         liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
//       }
//       ulEl.appendChild(liEl);
//     }
//     this.hourlySaleArray.push(totalCookiesSold);
//     liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// };

// var capitolHill = {
//   open: 6,
//   close: 9,
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   hourlySaleArray: [],
//   cookieTime: function() {
//     var hoursOfOperation = 12 - this.open + this.close;
//     var totalCookiesSold = 0;
//     for(var i = 0; i <= hoursOfOperation; i++) {
//       var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
//       totalCookiesSold += cookiesSoldByHour;
//       this.hourlySaleArray.push(cookiesSoldByHour);
//       var ulEl = document.getElementById('capitolHill');
//       var liEl = document.createElement('li');
//       if (this.open + i > 12) {
//         liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
//       } else if (this.open + i < 12) {
//         // give the element content
//         liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
//       } else {
//         liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
//       }
//       ulEl.appendChild(liEl);
//     }
//     this.hourlySaleArray.push(totalCookiesSold);
//     liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// };

// var alki = {
//   open: 6,
//   close: 9,
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   hourlySaleArray: [],
//   cookieTime: function() {
//     var hoursOfOperation = 12 - this.open + this.close;
//     var totalCookiesSold = 0;
//     for(var i = 0; i <= hoursOfOperation; i++) {
//       var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
//       var cookiesSoldByHour = Math.round(this.avgCookieSale * randomCustomerNumber);
//       totalCookiesSold += cookiesSoldByHour;
//       this.hourlySaleArray.push(cookiesSoldByHour);
//       var ulEl = document.getElementById('alki');
//       var liEl = document.createElement('li');
//       if (this.open + i > 12) {
//         liEl.textContent = (this.open + i - 12) + 'pm: ' + cookiesSoldByHour + ' cookies';
//       } else if (this.open + i < 12) {
//         // give the element content
//         liEl.textContent = this.open + i + 'am: ' + cookiesSoldByHour + ' cookies';
//       } else {
//         liEl.textContent = '12pm: ' + cookiesSoldByHour + ' cookies';
//       }
//       ulEl.appendChild(liEl);
//     }
//     this.hourlySaleArray.push(totalCookiesSold);
//     liEl.textContent = 'Total: ' + totalCookiesSold + ' cookies';
//     ulEl.appendChild(liEl);
//   }
// };

// pikeAndFirst.cookieTime();
// console.log(pikeAndFirst.hourlySaleArray);
// seaTacAir.cookieTime();
// seattleCenter.cookieTime();
// capitolHill.cookieTime();
// alki.cookieTime();
