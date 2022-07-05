let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: --23.558171207709666, lng: -46.72372932304436 },
    zoom: 8,
  });
}

window.initMap = initMap;
