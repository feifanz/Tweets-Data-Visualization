import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { ViewService } from './view.service';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { MapviewComponent } from './mapview/mapview.component'
@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    View3Component,
    DashbordComponent,
    MapviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
