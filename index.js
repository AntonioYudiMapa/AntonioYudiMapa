let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.558  , lng: -46.720 },
    zoom: 8, 
  });
}

window.initMap = initMap;
