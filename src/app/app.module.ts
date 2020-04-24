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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CustIconComponent,
    LayerGroupComponent,
    EsriPluginComponent,
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
