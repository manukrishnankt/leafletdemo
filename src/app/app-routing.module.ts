import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CustIconComponent } from './cust-icon/cust-icon.component';

const routes: Routes = [
  { path : '', component : TestComponent },
  { path : 'custicon', component : CustIconComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
