import { Component, OnInit } from '@angular/core';
import { TimerDataService } from './../timer-data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  timerLimitModel: any = 0;
  timerCurrentValue: any = 0;
  timer: any = null;
  startCount: number = 0;
  pausedLogs: any = [];
  allLogs: any = [];
  // @Output() timerVal = new EventEmitter<any>();
  // @Output() startedEvent = new EventEmitter<any>();
  // @Output() pausedEvent = new EventEmitter<any>();
  // @Output() logEvent = new EventEmitter<any>();

  constructor(
    private timerDataService: TimerDataService
  ) { }

  ngOnInit(): void {
  }

  startPause() {
    if(this.timerCurrentValue > 0 || this.timerLimitModel > 0) {
      if(this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.pausedLogs.push(this.timerCurrentValue);
        // this.pausedEvent.emit(this.pausedLogs.length);
        this.timerDataService.setPausedCount(this.pausedLogs.length);
        this.allLogs.push(`Paused at ${(new Date()).toLocaleString()}`);
      } else {
          this.startCount++;
          // this.startedEvent.emit(this.startCount);
          this.timerDataService.setStartCount(this.startCount);
          this.allLogs.push(`Started at ${(new Date()).toLocaleString()}`);
          if(this.timerCurrentValue == 0) {
            this.timerCurrentValue = this.timerLimitModel;
            // this.timerVal.emit(this.timerCurrentValue);
            this.timerDataService.setCountDown(this.timerCurrentValue);
          }
          this.timer = setInterval(() => {
            this.timerCurrentValue--;
            // this.timerVal.emit(this.timerCurrentValue);
            this.timerDataService.setCountDown(this.timerCurrentValue);
            if(this.timerCurrentValue <= 0) {
              clearInterval(this.timer);
              this.timerLimitModel = 0;
            }
          }, 1000);
      }
      // this.logEvent.emit(this.allLogs);
      this.timerDataService.setLoggedEvents(this.allLogs);
    }
  }
  
  reset() {
    clearInterval(this.timer);
    this.timer = null;
    this.timerCurrentValue = 0;
    this.timerLimitModel = 0;
    // this.timerVal.emit(this.timerCurrentValue);
    this.timerDataService.setCountDown(this.timerCurrentValue);
    this.startCount = 0;
    // this.startedEvent.emit(this.startCount);
    this.timerDataService.setStartCount(this.startCount);
    this.pausedLogs = [];
    // this.pausedEvent.emit(this.pausedLogs.length);
    this.timerDataService.setPausedCount(this.pausedLogs.length);
    this.allLogs = [];
    // this.logEvent.emit(this.allLogs);
    this.timerDataService.setLoggedEvents(this.allLogs);
  }

}
