import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Route2RoutingModule } from './route2-routing.module';
import { EcomComponent } from './ecom/ecom.component';


@NgModule({
  declarations: [EcomComponent],
  imports: [
    CommonModule,
    Route2RoutingModule,
    FormsModule
  ]
})
export class Route2Module { }
