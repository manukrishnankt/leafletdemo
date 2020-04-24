import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as M from '@asymmetrik/ngx-leaflet'

@Component({
  selector: 'app-layer-group',
  templateUrl: './layer-group.component.html',
  styleUrls: ['./layer-group.component.scss']
})
export class LayerGroupComponent implements OnInit {
  map: L.Map;

  constructor() { }

  ngOnInit(): void {
    this.initialGraph();
  }

  initialGraph() {
    var cities = L.layerGroup();

    var mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    
    var mbAttr = '';

    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
    L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
    L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
    L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

    var grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
      streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
      

    this.map = L.map('map', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [grayscale, cities]
    });
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };

    var overlays = {
      "Cities": cities
    };

    L.control.layers(baseLayers, overlays).addTo(this.map);
  }
}
