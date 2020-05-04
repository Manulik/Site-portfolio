import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NetworksComponent } from './components/networks/networks.component';

const routes: Routes = [
  { path: 'net', component: NetworksComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
