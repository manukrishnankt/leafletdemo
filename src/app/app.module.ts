import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TestComponent } from './test/test.component';
import { CustIconComponent } from './cust-icon/cust-icon.component';
import { FormsModule } from '@angular/forms';
import { LayerGroupComponent } from './layer-group/layer-group.component';
import { EsriPluginComponent } from './esri-plugin/esri-plugin.component';
import { ProviderComponent } from './provider/provider.component';
import { GmapTestComponent } from './gmap-test/gmap-test.component';
import { AgmCoreModule } from '@agm/core';
import { GmapComponent } from './gmap/gmap.component';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';
import { GmapCustComponent } from './gmap-cust/gmap-cust.component';
import { MapserverComponent } from './mapserver/mapserver.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustIconComponent,
    LayerGroupComponent,
    EsriPluginComponent,
    ProviderComponent,
    GmapTestComponent,
    GmapComponent,
    GmapCustComponent,
    MapserverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    FormsModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1qE9n9bkmcPRGmsuG9zmCAcN8qDsQrDQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
