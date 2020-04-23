import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-cust-icon',
  templateUrl: './cust-icon.component.html',
  styleUrls: ['./cust-icon.component.scss']
})
export class CustIconComponent implements OnInit {
  map: any;
  model: any = {};
  imageBounds: any;
  constructor() { }

  ngOnInit(): void {
    this.map = L.map('map').setView([40.730610, -73.935242], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.on('click', this.onMapClick);
  }
  searchLocation() {
    debugger;
    this.map.setView([this.model.latitude, this.model.longitude], 10);
  }
  loadMap(id) {
    var v1 = "";
    this.map.locate({ setView: true, watch: true }).on('locationfound', function(e){
        L.circle([e.latitude, e.longitude], e.accuracy/3, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.1,
        radius: 50
      }).addTo(this);

      L.marker([e.latitude, e.longitude]).bindPopup('Your are here :)').addTo(this);
    })
    .on('locationerror', function(e){
        console.log(e);
        alert("Location access denied.");
    });
    console.log(v1);
  }
  setLocation(lat, long) {
    debugger;
    this.map.setView([lat, long], 10);
  }

  addLayerToMap(){
    var layer = L.marker([this.model.latitude, this.model.longitude]).addTo(this.map);
    layer.addTo(this.map);
  }
  onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
  }
  
  addimageOverLay(){
   var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
   this.imageBounds = [[10.901582, 76.37716], [10.925854, 76.410965]];
    L.imageOverlay(imageUrl, this.imageBounds).addTo(this.map);
  }
}
