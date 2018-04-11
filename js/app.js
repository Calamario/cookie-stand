'use strict';

var timeOpen = 6; // am
var timeClose = 9; // pm
var hoursOfOperation = 12 - timeOpen + timeClose;
var allStoreInfo = [];
var totalByHourArray = [];

// creates element by taking in two strings 'the content and what element to make' as parameters
function createEl(elementText, tag) {
  var newEl  = document.createElement(tag);
  newEl.textContent = elementText;
  return newEl;
}

// Constructor function
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
  for(var i = 0; i < hoursOfOperation; i++) {
    // Generates random number of customer for that hour
    var randomCustomerNumber = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
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
  var trEl = createEl(' ', 'tr');
  var tdEl = createEl(this.storeName, 'td');
  trEl.appendChild(tdEl);
  for (var i in this.hourlySaleArray) {
    tdEl = createEl(this.hourlySaleArray[i], 'td');
    trEl.appendChild(tdEl);
  }
  tdEl = createEl(this.totalSold, 'td');
  trEl.appendChild(tdEl);
  tBody.appendChild(trEl);
};

// function to render time in the tHEAD
function renderTime(id, whichTable) {
  var tBodyEl = document.getElementById(id);
  var thEl = createEl(' ', 'th');
  tBodyEl.appendChild(thEl);
  for(var i = 0; i < hoursOfOperation; i ++) {
    thEl = document.createElement('th');
    if (timeOpen + i > 12) {
      thEl.textContent = (timeOpen + i - 12) + ':00 pm';
    } else if (timeOpen + i < 12){
      thEl.textContent = timeOpen + i + ':00 am';
    } else {
      thEl.textContent = '12:00 pm';
    }
    tBodyEl.appendChild(thEl);
  }
  if (whichTable === 'sales') {
    thEl = createEl('Daily Location Total', 'th');
    tBodyEl.appendChild(thEl);
  }
}

// function to render how many cookies are sold in total for each hour in the tFOOT
function renderHourlyTotal() {
  var tFootEl = document.getElementById('totalByHour');
  var trEl = createEl('Totals', 'tr');
  var totalEachHour = 0;
  var totalInADay = 0;
  for (var i = 0; i < hoursOfOperation; i++) {
    for (var j in allStoreInfo) {
      totalEachHour += allStoreInfo[j].hourlySaleArray[i];
      totalInADay += allStoreInfo[j].hourlySaleArray[i];
    }
    var tdEl = createEl(totalEachHour, 'td');
    trEl.appendChild(tdEl);
    totalByHourArray.push(totalEachHour);
    totalEachHour = 0;
  }
  tdEl = createEl(totalInADay, 'td');
  tdEl.setAttribute('id','grandTotal');
  trEl.appendChild(tdEl);
  tFootEl.appendChild(trEl);
}

// Makes a new table to store how many employees are needed at each location per hour!
function totalTosserNeeded() {
  var extraEmployees = 0;
  var tableEl = document.getElementById('tosserNeeded');
  for (var j in allStoreInfo) {
    var trEl = createEl('', 'tr');
    var tdEl = createEl(allStoreInfo[j].storeName, 'td');
    trEl.appendChild(tdEl);
    for (var i = 0; i < hoursOfOperation; i++) {
      extraEmployees = Math.ceil((allStoreInfo[j].hourlySaleArray[i] - 40) / 20);
      if (extraEmployees < 0) {
        tdEl = createEl(0, 'td');
      } else {
        tdEl = createEl(extraEmployees, 'td');
      }
      trEl.appendChild(tdEl);
    }
    tableEl.appendChild(trEl);
  }
}

// Did an event happen? Here's what needs to go down!
function handleNewStoreForm(event){
  event.preventDefault();
  var formElement = event.target;
  var newStore = new Store(formElement.storeName.value, formElement.minCustomer.value, formElement.maxCustomer.value, formElement.avgCookieSale.value);
  newStore.calculateHourlyCookiesSold();
  newStore.calculateTotalCookiesAtStore();
  newStore.renderRow();
}

// Listen for Events!
var newStoreForm = document.getElementById('input-new-store-form');
newStoreForm.addEventListener('submit', handleNewStoreForm);

// Making new instances!
var pikeAndFirst = new Store('1st & Pike', 23, 65, 6.3);
var seaTacAir = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArray = [pikeAndFirst, seaTacAir, seattleCenter, capitolHill, alki];

renderTime('time', 'sales');
for (var i = 0; i < storeArray.length; i++) {
  storeArray[i].calculateHourlyCookiesSold();
  storeArray[i].calculateTotalCookiesAtStore();
  storeArray[i].renderRow();
}
renderHourlyTotal();

renderTime('tosserNeeded', 'tosser needed');
totalTosserNeeded();

console.log(allStoreInfo);

