let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -46.723 , lng: -23.558 },
    zoom: 8,
  });
}

window.initMap = initMap;
