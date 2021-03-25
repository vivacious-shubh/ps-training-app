import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentGridComponent } from './student-grid/student-grid.component';

const routes: Routes = [
  {
    path: '',
    component: StudentGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route5RoutingModule { }
