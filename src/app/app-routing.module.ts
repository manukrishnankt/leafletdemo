import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CustIconComponent } from './cust-icon/cust-icon.component';
import { LayerGroupComponent } from './layer-group/layer-group.component';
import { EsriPluginComponent } from './esri-plugin/esri-plugin.component';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  { path : '', component : TestComponent },
  { path : 'custicon', component : CustIconComponent },
  { path : 'lgroup', component : LayerGroupComponent },
  { path : 'esri', component : EsriPluginComponent },
  { path : 'provider', component : ProviderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
