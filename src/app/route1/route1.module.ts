import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route1RoutingModule } from './route1-routing.module';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';


@NgModule({
  declarations: [FloatingBannerComponent],
  imports: [
    CommonModule,
    Route1RoutingModule
  ]
})
export class Route1Module { }
