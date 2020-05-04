import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';
import * as proj4 from "proj4"; 
import 'proj4leaflet';


@Component({
  selector: 'app-gibs',
  templateUrl: './gibs.component.html',
  styleUrls: ['./gibs.component.scss']
})
export class GibsComponent implements OnInit {
  map: any;

  constructor() { }

  ngOnInit(): void {
    


    var MODIS_Terra_CorrectedReflectance_Bands367 = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_Bands367/default/{time}/GoogleMapsCompatible_Level{maxZoom}/{z}/{y}/{x}.jpg', {
      attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [[20.5937, 78.9629], [-20.5937, -78.9629]],
      minZoom: 1,
      maxZoom: 9,
      time:'2020-04-28'
    });

    var MODIS_Aqua_Sea_Ice = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Aqua_Sea_Ice/default/{time}/GoogleMapsCompatible_Level{maxZoom}/{z}/{y}/{x}.png', {
      attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [[20.5937, 78.9629], [-20.5937, -78.9629]],
      minZoom: 1,
      maxZoom: 7,
      time:'2020-04-28'
    });
    
    var MODIS_Terra_Land_Surface_Temp_Night = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_Land_Surface_Temp_Night/default/{time}/GoogleMapsCompatible_Level{maxZoom}/{z}/{y}/{x}.png', {
      attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
      bounds: [[20.5937, 78.9629], [-20.5937, -78.9629]],
      minZoom: 1,
      maxZoom: 7,
      time:'2020-04-28'
    });

    // var EPSG4326 = new L.Proj.CRS(
    //   'EPSG:4326',
    //   '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs', {
    //     origin:[20.5937, 78.9629],
    //     resolutions: [
    //       0.5625,
    //       0.28125,
    //       0.140625,
    //       0.0703125,
    //       0.03515625,
    //       0.017578125,
    //       0.0087890625,
    //       0.00439453125,
    //       0.002197265625
    //     ],
    //     // Values are x and y here instead of lat and long elsewhere.
    //     bounds: new L.Bounds([[20.5937, 78.9629], [-20.5937, -78.9629]])
    //   }
    // );

    // this.map = L.map('map', {
    //   center: [0, 0],
    //   zoom: 2,
    //   maxZoom: 8,
    //   crs: EPSG4326,
    //   maxBounds: [
    //     [-120, -220],
    //     [120, 220]
    //   ]
    // });

    this.map = L.map('map').setView([20.5937, 78.9629], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    var template =
    '//gibs-{s}.earthdata.nasa.gov/wmts/epsg4326/best/' +
    '{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpg';

    var GMapCloud = L.tileLayer(template, {
      layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
      tileMatrixSet: 'EPSG4326_250m',
      time: '2020-04-28',
      tileSize: 256,
      subdomains: 'abc',
      noWrap: true,
      
      continuousWorld: true,
      // Prevent Leaflet from retrieving non-existent tiles on the
      // borders.
      // bounds: [[20.5937, 78.9629], [-20.5937, -78.9629]],
      attribution:
        '<a href="https://wiki.earthdata.nasa.gov/display/GIBS">' +
        'NASA EOSDIS GIBS</a>&nbsp;&nbsp;&nbsp;' +
        '<a href="https://github.com/nasa-gibs/web-examples/blob/master/examples/leaflet/geographic-epsg4326.js">' +
        'View Source' +
        '</a>'
    });

    var baseLayers = {
      "GMapCloud":GMapCloud,
      "MODIS_Terra_Land_Surface_Temp_Night":MODIS_Terra_Land_Surface_Temp_Night,
      "MODIS_Aqua_Sea_Ice": MODIS_Aqua_Sea_Ice,
      "MODIS_Terra_CorrectedReflectance_Bands367":MODIS_Terra_CorrectedReflectance_Bands367 ,
    };

    debugger;
    L.control.layers(baseLayers).addTo(this.map);
  }

}
