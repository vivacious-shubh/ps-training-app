import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerDataService } from './../timer-data.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit, OnDestroy {
  startCount: any = 0;
  pausedCount: any = 0;
  subscriptionOne: any = null;
  subscriptionTwo: any = null;

  constructor(
    private timerDataService: TimerDataService
  ) { 
    this.subscriptionOne = this.timerDataService.getStartCount().subscribe((o) => {
      this.startCount = o;
    });
    this.subscriptionTwo = this.timerDataService.getPausedCount().subscribe((o) => {
      this.pausedCount = o;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptionOne.unsubscribe();
    this.subscriptionTwo.unsubscribe();
  }
}
