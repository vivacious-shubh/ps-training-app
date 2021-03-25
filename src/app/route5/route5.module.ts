import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Route5RoutingModule } from './route5-routing.module';
import { StudentGridComponent } from './student-grid/student-grid.component';
import { StudentGridService } from './student-grid.service';


@NgModule({
  declarations: [StudentGridComponent],
  imports: [
    CommonModule,
    Route5RoutingModule,
    HttpClientModule
  ],
  providers: [
    StudentGridService
  ]
})
export class Route5Module { }
