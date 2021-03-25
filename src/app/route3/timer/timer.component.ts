import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timerValue: number = null;
  startCount: number = 0;
  pausedCount: number = 0;
  loggedEvents: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  onCountdownChange(e) {
    this.timerValue = e;
  }

  onStart(e) {
    this.startCount = e;
  }

  onPause(e) {
    this.pausedCount = e;
  }

  onEventLogged(e) {
    this.loggedEvents = e;
  }

}
