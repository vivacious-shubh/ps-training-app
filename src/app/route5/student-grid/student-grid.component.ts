import { Component, OnInit } from '@angular/core';
import { StudentGridService } from './../student-grid.service';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit {
  marks: any = [];
  keys: any = [];
  sortBy: string = null;
  sortDir: string = null;
  unsortedData: any = [];

  constructor(
    private studentGridService: StudentGridService
  ) { }

  ngOnInit(): void {
    this.getMarks();
  }

  getMarks() {
    this.studentGridService.getMarks().subscribe((res) => {
      this.unsortedData = res;
      this.marks = [...this.unsortedData];
      this.getKeys();
    }, (err) => {
      console.log('Error', err);
    });
  }

  getKeys() {
    this.keys = Object.keys(this.marks[0]);
  }

  sort(sortBy) {
    if(this.sortBy !== sortBy) {
      this.sortDir = 'ASC';
    } else if ( this.sortDir === 'ASC') {
      this.sortDir = 'DSC';
    } else if ( this.sortDir === 'DSC') {
      this.sortDir = null;
      sortBy = null;
    }
    this.sortBy = sortBy;
    if(this.sortBy) {
      this.marks.sort((a,b) => {
        if(this.sortDir === 'DSC') {
          return a[this.sortBy] > b[this.sortBy] ? -1 : 1;
        } else {
          return a[this.sortBy] < b[this.sortBy] ? -1 : 1;
        }
      })
    } else {
      this.marks = [...this.unsortedData];
    }
  }

}
