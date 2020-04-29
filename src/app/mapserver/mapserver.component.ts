import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';
import 'leaflet.heat/dist/leaflet-heat.js';
import { addressPoints} from '../../assets/realworld.10000'
@Component({
  selector: 'app-mapserver',
  templateUrl: './mapserver.component.html',
  styleUrls: ['./mapserver.component.scss']
})
export class MapserverComponent implements OnInit {
  map: L.Map;
  curZoomVal : number = 10;
  curMaxZoomVal : number = 18;
  curMinZoomVal : number = 0;
  initLoaded : L.LatLngExpression = [-37.8839,175.3745188667];
  newAddressPoints: any;
  constructor() { }
  ngOnInit(): void {
    this.map = L.map('map', {
      maxZoom: this.curMaxZoomVal,
      minZoom: this.curMinZoomVal,
      dragging:true
    }).setView(this.initLoaded, this.curZoomVal);

    //const esriLayer = esri.basemapLayer('Imagery');
    
    const esriLayer = esri.basemapLayer('Topographic');
    this.map.addLayer(esriLayer);
  }
  initialGraph() {
    var cities = L.layerGroup();

    
    var mbAttr = '';

    L.marker([52.505, -0.09]).bindPopup('This is Littleton, CO.').addTo(cities),
    L.marker([53.505, -0.09]).bindPopup('This is Denver, CO.').addTo(cities),
    L.marker([54.505, -0.09]).bindPopup('This is Aurora, CO.').addTo(cities),
    L.marker([55.505, -0.09]).bindPopup('This is Golden, CO.').addTo(cities);
    var steman = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      subdomains: 'abcd',
      minZoom: 0,
      maxZoom: 20,
    }),
     cyclOSM = L.tileLayer('https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }),
    Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });
    this.newAddressPoints = addressPoints.map(function (p) { return [p[0], p[1]]; });
    var heat1 = null;
    try{
      heat1 =L.heatLayer(this.newAddressPoints,{})
    }catch{

    }
    var baseLayers = {
      "cyclOSM": cyclOSM,
      "Esri_WorldImagery":Esri_WorldImagery,
      "heat":heat1,
      "steman": steman,
    };

    var overlays = {
      "Cities": cities
    };
    L.control.layers(baseLayers, overlays).addTo(this.map);
  }
  
}
