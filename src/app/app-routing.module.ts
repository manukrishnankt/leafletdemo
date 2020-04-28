import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CustIconComponent } from './cust-icon/cust-icon.component';
import { LayerGroupComponent } from './layer-group/layer-group.component';
import { EsriPluginComponent } from './esri-plugin/esri-plugin.component';
import { ProviderComponent } from './provider/provider.component';
import { GmapTestComponent } from './gmap-test/gmap-test.component';
import { GmapComponent } from './gmap/gmap.component';
import { GmapCustComponent } from './gmap-cust/gmap-cust.component';
import { MapserverComponent } from './mapserver/mapserver.component';

const routes: Routes = [
  { path : 'component', component : TestComponent },
  { path : 'latlng', component : CustIconComponent },
  { path : 'lgroup', component : LayerGroupComponent },
  { path : 'esri', component : EsriPluginComponent },
  { path : 'provider', component : ProviderComponent },
  { path : 'gmap', component : GmapTestComponent },
  { path : 'gmap1', component : GmapComponent },
  { path : 'gmap2', component : GmapCustComponent },
  { path : 'mapserver', component : MapserverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
