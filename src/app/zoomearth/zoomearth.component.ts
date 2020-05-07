import { Component, OnInit } from '@angular/core';

import "leaflet.markercluster/dist/MarkerCluster.Default.css"; 
import { AppService } from '../app.service';
import 'leaflet.markercluster';

const L = window['L'];
// export const POLSKA_SZER_GEOGR = 51.9874; 
// export const POLSKA_DL_GEOGR = 19.0162;
// export const POLSKA_ZOOM = 5;

@Component({
  selector: 'app-zoomearth',
  templateUrl: './zoomearth.component.html',
  styleUrls: ['./zoomearth.component.scss']
})
export class ZoomearthComponent implements OnInit {
  responseArr: any[];
  map: any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.responseArr = this.appService.checkCredential();
    // .subscribe(responseData => {
        var cities = L.layerGroup();
        // this.responseArr = responseData;
        var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        const markerIcon = L.icon({
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40],
            // specify the path here
            iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
          });
    
        var mbAttr = '';
        const markers = L.markerClusterGroup();
        this.responseArr.forEach(x => {
          var marker = L.marker([x.location_lat, x.location_lng],{
            icon: markerIcon}).bindPopup(x.policy_no);
          marker.bindPopup(x.policy_no);
          markers.addLayer(marker);
        });
  
        var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
          streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
        this.map = L.map('map', {
          center: [39.73, -104.99],
          zoom: 5,
          layers: [grayscale, cities]
        });
        var baseLayers = {
          "Grayscale": grayscale,
          "Streets": streets
        };
  
        var overlays = {
          "Cities": cities
        };
  
        this.map.addLayer(markers);
        L.control.layers(baseLayers, {}).addTo(this.map);
  
      // });
  }
  customFunction() {
    //   var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // 		maxZoom: 18,
    // 		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
    // 	}),
    // 	latlng = L.latLng(-37.82, 175.24);

    // var map = L.map('map', {center: latlng, zoom: 13, layers: [tiles]});

    // var markers = L.markerClusterGroup();

    // // for (var i = 0; i < addressPoints.length; i++) {
    // // 	var a = addressPoints[i];
    // // 	var title = a[2];
    // // 	var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
    // // 	marker.bindPopup(title);
    // // 	markers.addLayer(marker);
    // // }

    // map.addLayer(markers);
  }
  commented(){
    
    // this.appService.checkCredential().subscribe(responseData => {
    //   var cities = L.layerGroup();
    //   this.responseArr = responseData;
    //   var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    //   var mbAttr = '';
    //   const markers = L.markerClusterGroup();
    //   this.responseArr.forEach(x => {
    //     var marker = L.marker([x.location_lat, x.location_lng]).bindPopup(x.policy_no).addTo(cities);
    //     marker.bindPopup(x.policy_no);
    //     markers.addLayer(marker);
    //   });
    //   debugger;
    //   this.map.addLayer(markers);

    //   var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    //     streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
    //   this.map = L.map('map', {
    //     center: [39.73, -104.99],
    //     zoom: 5,
    //     layers: [grayscale, cities]
    //   });
    //   var baseLayers = {
    //     "Grayscale": grayscale,
    //     "Streets": streets
    //   };

    //   var overlays = {
    //     "Cities": cities
    //   };

    //   L.control.layers(baseLayers, overlays).addTo(this.map);

    // })


  }
  commernted3(){
    // var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 18,
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
    // });
    // const map = L.map('map', {
    //   center: [POLSKA_SZER_GEOGR, POLSKA_DL_GEOGR],
    //   zoom: POLSKA_ZOOM,
    //   zoomControl: true, layers: [tiles]
    // });
    // const addressPoints = [
    //   [POLSKA_SZER_GEOGR, POLSKA_DL_GEOGR, 1],
    //   [POLSKA_SZER_GEOGR+1, POLSKA_DL_GEOGR+1, 1]
    // ]
    // const markers = L.markerClusterGroup();
    // const markerIcon = L.icon({
    //   iconSize: [25, 41],
    //   iconAnchor: [10, 41],
    //   popupAnchor: [2, -40],
    //   // specify the path here
    //   iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    //   shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
    // })
    // for (var i = 0; i < addressPoints.length; i++) {
    //   var a = addressPoints[i];
    //   var title = a[2]+'';
    //   var marker = L.marker(new L.LatLng(a[0], a[1]), {
    //     title: title,
    //     icon: markerIcon
    //   });
    //   marker.bindPopup(title);
    //   markers.addLayer(marker);
    // }

    // map.addLayer(markers);
  }
}
