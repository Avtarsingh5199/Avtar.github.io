
let para = document.querySelector('p');
let button = document.querySelector('button');


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    para.innerHTML = '<p> Geolocation is not supported. Booo! :( ';
  }
}

function showPosition(position) {
  para.innerHTML = '<p> Latitude is ' + position.coords.latitude +
    ' and longitude is ' + position.coords.longitude + '</p>';
}

button.onclick = getLocation;
