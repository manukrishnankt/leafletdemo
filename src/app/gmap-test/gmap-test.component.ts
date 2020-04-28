import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-gmap-test',
  templateUrl: './gmap-test.component.html',
  styleUrls: ['./gmap-test.component.scss']
})
export class GmapTestComponent implements OnInit {
  constructor() { }

  texto : string = 'Test Map';
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 5;

  ngOnInit(): void {
    
  }
  goTo(){
    this.texto  = 'Kerala';
    this.lat = 10.850516;
    this.lng = 76.271080;
    this.zoom = 5;
  }
}
