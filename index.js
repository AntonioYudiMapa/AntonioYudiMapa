var map;
var marker;

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJPyYZVZZrVjx1XzY5DruLV_f2mOiK0OU&&v=3"></script>
<script>
  function initMap() {
    50 lines (44 sloc)  1014 Bytes
 

    
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Mapa em tempo real</title>
	<style>
		#map {
			height: 400px;
			width: 100%;
		}
	</style>
</head>
<body>
	<div id="map"></div>

	<script>
		function initMap() {
			var map;
			var marker;

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

		// adiciona um listener de eventos para a carga da API
		window.addEventListener('load', function() {
			// carrega a API do Google Maps
			var script = document.createElement('script');
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDJPyYZVZZrVjx1XzY5DruLV_f2mOiK0OU&&callback=initMap';
			document.body.appendChild(script);
		});
	</script>
</body>
</html>

  }

  window.initMap = initMap;
</script>




Regenerate response

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
