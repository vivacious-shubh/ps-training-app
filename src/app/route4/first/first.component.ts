import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimerDataService } from './../timer-data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy {
  timerValue: number = null;
  subscriptionOne: any = null;

  constructor(
    private timerDataService: TimerDataService
  ) { 
    this.subscriptionOne = this.timerDataService.getCoundown().subscribe((o) => {
      this.timerValue = o;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionOne.unsubscribe();
  }

}
