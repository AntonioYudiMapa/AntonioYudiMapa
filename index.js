var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -23.5505, lng: -46.6333}, // São Paulo, Brasil
        zoom: 14
    });

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP
    });

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marker.setPosition(pos);
            map.setCenter(pos);
        });
    } else {
        alert("Seu navegador não suporta geolocalização!");
    }
}
