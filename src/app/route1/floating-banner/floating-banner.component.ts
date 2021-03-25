import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-banner',
  templateUrl: './floating-banner.component.html',
  styleUrls: ['./floating-banner.component.css']
})
export class FloatingBannerComponent implements OnInit {
  containers: Array<any> = [
    { height: '95%', width: '95%' },
    { height: '85%', width: '93%' },
    { height: '75%', width: '90%' },
    { height: '65%', width: '88%' },
    { height: '55%', width: '86%' },
    { height: '45%', width: '84%' },
    { height: '35%', width: '82%' },
    { height: '25%', width: '80%' }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
