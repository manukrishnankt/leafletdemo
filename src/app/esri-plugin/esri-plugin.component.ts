import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';

@Component({
  selector: 'app-esri-plugin',
  templateUrl: './esri-plugin.component.html',
  styleUrls: ['./esri-plugin.component.scss']
})
export class EsriPluginComponent implements OnInit {
  map: L.Map;

  constructor() { }

  ngOnInit(): void {
    this.map = L.map('map', {
      maxZoom: 18,
      minZoom: 0
    }).setView([51.505, -0.09], 15);

    //const esriLayer = esri.basemapLayer('Imagery');
    const esriLayer = esri.basemapLayer('Topographic');
    this.map.addLayer(esriLayer);
  }

}
