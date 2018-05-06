import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {MapviewComponent} from './mapview/mapview.component';
import {GooglemapviewComponent} from "./googlemapview/googlemapview.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashbordComponent },
  { path: 'view1', component: View1Component },
  { path: 'view2', component: View2Component },
  { path: 'view3', component: View3Component },
  { path: 'mapview', component: MapviewComponent },
  { path: 'googlemapview', component: GooglemapviewComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
