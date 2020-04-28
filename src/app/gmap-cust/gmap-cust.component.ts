import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { latLng } from 'leaflet';

@Component({
  selector: 'app-gmap-cust',
  templateUrl: './gmap-cust.component.html',
  styleUrls: ['./gmap-cust.component.scss']
})
export class GmapCustComponent  {
  zoom = 10 ;
  model: any = {};
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  loc: Location;
  map: any;
  location: Location;
  constructor(){
  }
  searchLocation(){
    if (this.map){
      this.map.setCenter(new google.maps.LatLng(this.model.latitude, this.model.longitude));
    }
  }
  mapReady(map) {
    this.map = map;

  }
  addMarker(lat: number, lng: number) {
    this.location.markers.push({
        lat,
        lng,
    })
}
  
}

interface Marker {
  lat: number;
  lng: number;
}

interface Location {
  latitude: number;
  longitude: number;
  mapType ?: string;
  zoom ?: number;
  markers ?: Array<Marker>;
}
