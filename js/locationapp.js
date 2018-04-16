'use strict';


var titleEl = document.getElementById('my-container');
titleEl.addEventListener('click', function() {
  window.location.href = '../index.html';
});


// Can't figure out a way to make this into a single function. I want to DRY is somehow
var mainEl = document.getElementById('mainForLocation');

var pikeAndFirstEl = document.getElementById('firstAndPike');
pikeAndFirstEl.addEventListener('click', function() {
  var imgEl = document.getElementById('locationCookiePic');
  mainEl.removeChild(imgEl);
  var newImgEl = document.createElement('img');
  newImgEl.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pike_Place_Market_Entrance.JPG/1600px-Pike_Place_Market_Entrance.JPG');
  newImgEl.setAttribute('id', 'locationCookiePic');
  mainEl.appendChild(newImgEl);
});

var seaTacEl = document.getElementById('seaTacAirport');
seaTacEl.addEventListener('click', function() {
  var imgEl = document.getElementById('locationCookiePic');
  mainEl.removeChild(imgEl);
  var newImgEl = document.createElement('img');
  newImgEl.setAttribute('src', 'https://cdn.geekwire.com/wp-content/uploads/2015/04/airport-seatac.jpg');
  newImgEl.setAttribute('id', 'locationCookiePic');
  mainEl.appendChild(newImgEl);
});

var seattleCenEl = document.getElementById('seattleCenter');
seattleCenEl.addEventListener('click', function() {
  var imgEl = document.getElementById('locationCookiePic');
  mainEl.removeChild(imgEl);
  var newImgEl = document.createElement('img');
  newImgEl.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Seattle_Center%2C_Space_Needle%2C_Experience_Music_Project%2C_Sci-Fi_Museum.jpg');
  newImgEl.setAttribute('id', 'locationCookiePic');
  mainEl.appendChild(newImgEl);
});

var capHillEl = document.getElementById('capitolHill');
capHillEl.addEventListener('click', function() {
  var imgEl = document.getElementById('locationCookiePic');
  mainEl.removeChild(imgEl);
  var newImgEl = document.createElement('img');
  newImgEl.setAttribute('src', 'https://c1.staticflickr.com/4/3741/12127254434_4a9dff71af_b.jpg');
  newImgEl.setAttribute('id', 'locationCookiePic');
  mainEl.appendChild(newImgEl);
});

var alkiEl = document.getElementById('alki');
alkiEl.addEventListener('click', function() {
  var imgEl = document.getElementById('locationCookiePic');
  mainEl.removeChild(imgEl);
  var newImgEl = document.createElement('img');
  newImgEl.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Alki_Beach%2C_Seattle.jpg');
  newImgEl.setAttribute('id', 'locationCookiePic');
  mainEl.appendChild(newImgEl);
});


