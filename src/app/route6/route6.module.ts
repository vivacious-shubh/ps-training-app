import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route6-routing.module';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [DynamicDivComponent],
  imports: [
    CommonModule,
    Route6RoutingModule,
    InfiniteScrollModule
  ]
})
export class Route6Module { }
