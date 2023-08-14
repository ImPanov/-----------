import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { generatePopup } from './card';
const map = L.map('map-canvas');

const CENTER_MAP = {
  lat: 35.68948,
  lng: 139.69170,
}

const mainMarkerIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52,52],
  iconAnchor: [26,52],
})

const mainMarker = L.marker(CENTER_MAP, {
  draggable: true,
  icon: mainMarkerIcon,
})
const markerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40,40],
  iconAnchor: [20,40],
})

const layerMarkers = L.layerGroup().addTo(map)

const resetMarkers = (adverts) => {
  layerMarkers.clearLayers();
  adverts.forEach((advert)=> {
    const { location: { lat, lng } } = advert;
    const marker = L.marker(
      { lat, lng },
      { icon: markerIcon }
    );
    marker.addTo(layerMarkers)
    .bindPopup(generatePopup(advert));

  })
}

const initMap = () => {
  map.setView(CENTER_MAP,10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  mainMarker.addTo(map);
}
export { initMap, resetMarkers }

