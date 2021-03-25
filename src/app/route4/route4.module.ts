import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Route4RoutingModule } from './route4-routing.module';
import { TimerComponent } from './timer/timer.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { TimerDataService } from './timer-data.service';


@NgModule({
  declarations: [TimerComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent],
  imports: [
    CommonModule,
    Route4RoutingModule,
    FormsModule
  ],
  providers: [
    TimerDataService
  ]
})
export class Route4Module { }
