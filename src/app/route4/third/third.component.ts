import { Component, OnInit } from '@angular/core';
import { TimerDataService } from './../timer-data.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  loggedEvents: any = [];
  subscriptionOne: any = null;

  constructor(
    private timerDataService: TimerDataService
  ) { 
    this.subscriptionOne = this.timerDataService.getLoggedEvents().subscribe((o) => {
      this.loggedEvents = o;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionOne.unsubscribe();
  }
}
