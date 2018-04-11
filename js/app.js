'use strict';

var timeOpen = 6; // for am
var timeClose = 9; // for pm
var hoursOfOperation = 12 - timeOpen + timeClose;
var allStoreInfo = [];
var totalByHourArray = [];

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
    tdEl.textContent = this.hourlySaleArray[i];
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = this.totalSold;
  trEl.appendChild(tdEl);
  tBody.appendChild(trEl);
};

// function to render time
function renderTime(id) {
  var tBodyEl = document.getElementById(id);
  var tdEl = document.createElement('th');
  tBodyEl.appendChild(tdEl);
  for(var i = 0; i < hoursOfOperation; i ++) {
    tdEl = document.createElement('th');
    if (timeOpen + i > 12) {
      tdEl.textContent = (timeOpen + i - 12) + ':00 pm';
    } else if (timeOpen + i < 12){
      tdEl.textContent = timeOpen + i + ':00 am';
    } else {
      tdEl.textContent = '12:00 pm';
    }
    tBodyEl.appendChild(tdEl);
  }
  tdEl = document.createElement('th');
  tdEl.textContent = 'Daily Location Total';
  tBodyEl.appendChild(tdEl);
}

// function to render how many cookies are sold in total for each hour
function renderHourlyTotal() {
  var tFootEl = document.getElementById('totalByHour');
  var trEl = document.createElement('tr');
  trEl.textContent = 'Totals';
  var totalEachHour = 0;
  var totalInADay = 0;
  for (var i = 0; i < hoursOfOperation; i++) {
    for (var j in allStoreInfo) {
      totalEachHour += allStoreInfo[j].hourlySaleArray[i];
      totalInADay += allStoreInfo[j].hourlySaleArray[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = totalEachHour;
    trEl.appendChild(tdEl);
    totalByHourArray.push(totalEachHour);
    totalEachHour = 0;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalInADay;
  tdEl.setAttribute('id','grandTotal');
  trEl.appendChild(tdEl);
  tFootEl.appendChild(trEl);
}

function totalTosserNeeded(storeArray) {
  var extraEmployees = 0;
  var tableEl = document.getElementById('tosserNeeded');
  for (var j in allStoreInfo) {
    var trEl = document.createElement('tr');
    trEl.textContent = allStoreInfo[j].storeName;
    tableEl.appendChild(trEl);
    for (var i = 0; i < hoursOfOperation; i++) {
      var tdEl = document.createElement('td');
      extraEmployees = Math.ceil((allStoreInfo[j].hourlySaleArray[i] - 40) / 20);
      if (extraEmployees < 0) {
        tdEl.textContent = 0;
      } else {
        tdEl.textContent = extraEmployees;
      }
      trEl.appendChild(tdEl);
    }
  }
}

var pikeAndFirst = new Store('1st & Pike', 23, 65, 6.3);
var seaTacAir = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

var storeArray = [pikeAndFirst, seaTacAir, seattleCenter, capitolHill, alki];

renderTime('time');
for (var i = 0; i < storeArray.length; i++) {
  storeArray[i].calculateHourlyCookiesSold();
  storeArray[i].calculateTotalCookiesAtStore();
  storeArray[i].renderRow();
}
renderHourlyTotal();

renderTime('tosserNeeded');
totalTosserNeeded(storeArray);

console.log(allStoreInfo);







