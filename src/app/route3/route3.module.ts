import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Route3RoutingModule } from './route3-routing.module';
import { TimerComponent } from './timer/timer.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';


@NgModule({
  declarations: [TimerComponent, FirstComponent, SecondComponent, ThirdComponent, FourthComponent ],
  imports: [
    CommonModule,
    Route3RoutingModule,
    FormsModule
  ]
})
export class Route3Module { }
