import { Component, OnInit } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';
import * as L from 'leaflet';
import { antPath } from 'leaflet-ant-path';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  options: any;
  map:any;
  constructor() { }

  ngOnInit(): void {
    // this.options = {
    //   layers: [
    //     tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    //   ],
    //   zoom: 10,
    //   center: latLng(40.730610, -73.935242)
    // };
    this.map = L.map('map').setView([40.730610, -73.935242], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    L.marker([0, 0]).bindPopup('<b>Hello!!</b>').addTo(this.map);

  var marker = L.marker([40.711529, -74.080891]).addTo(this.map);
	var circle = L.circle([40.691267, -74.259687], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
	}).addTo(this.map);

	var polygon = L.polygon([
    [40.689654, -73.945208],
    [40.653490, -73.989524],
    [40.664979, -73.907624]
	]).addTo(this.map);

	marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
	circle.bindPopup("I am a circle.");
	polygon.bindPopup("I am a polygon.");

	var popup = L.popup()
    .setLatLng([40.598073, -74.100385])
    .setContent("I am a standalone popup.")
    .openOn(this.map);

  this.map.on('click', this.onMapClick);

  const antCircle1 = antPath(
    [40.700531, -74.480438],
    {
      use: L.circle,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }
  );
  
  antPath([[40.698449, -74.792175], [40.86373, -74.599915],[40.847117, -74.502411]], {color: '#FF0000', weight: 5, opacity: 0.6}).addTo(this.map);
  antPath([[40.460725, -74.709778], [40.953993, -73.12912]], {color: '#0000FF', weight: 8, opacity: 0.3, reverse: true,}).addTo(this.map);
  antPath([40.700531, -74.480438],
    {
      use: L.circle,
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 5000
    }).addTo(this.map);

    const antCurve = antPath([
      "M",
      [40.847117, -74.502411],
      
      "C",
      [40.91977, -74.411774],
      [40.928068, -74.31015],
      [40.908358, -74.200287],
      
      "V",
      [40.788937],
      
      "L",
      [40.901095, -74.050598],
      [40.962287, -73.918762],
      
      "Z"
      ],
      { color: "red", fill: true });
      antCurve.addTo(this.map);
  }
  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
	}
}
