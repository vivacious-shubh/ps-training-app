import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  @Input() startCount: any = 0;
  @Input() pausedCount: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
