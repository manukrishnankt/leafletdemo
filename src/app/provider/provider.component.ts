import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-providers';
@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {
  map: any;

  constructor() { }

  ngOnInit(): void {
    
    this.map = L.map('map', {
      maxZoom: 18,
      minZoom: 0
    }).setView([51.505, -0.09], 15);

    L.tileLayer.provider('Stamen.Watercolor',{}).addTo(this.map);
  }

}
