import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.css']
})
export class DynamicDivComponent implements OnInit {
  boxList: any = [
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onScroll() {
    this.boxList.push({ name: this.boxList.length + 1 }, { name: this.boxList.length + 2 }, { name: this.boxList.length + 3 });
  }

  onClick(index) {
    alert(`Button ${index} is clicked!` );
  }

}
