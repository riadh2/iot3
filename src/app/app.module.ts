import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {  ChatService} from './services/websocket.service';
import { GaugeChartModule } from 'angular-gauge-chart'
import { NgxGaugeModule } from 'ngx-gauge';
import { MatButtonModule} from '@angular/material';

import { ChartsModule } from 'ng2-charts';
import {Chart} from 'chart.js';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GaugeChartModule,
    MatButtonModule,
    NgxGaugeModule,
    ChartsModule,
  ],
  
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
