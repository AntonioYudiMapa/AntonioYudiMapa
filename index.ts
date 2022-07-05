let map: google.maps.Map;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -23.558, lng: 46.720 },
    zoom: 8,
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
