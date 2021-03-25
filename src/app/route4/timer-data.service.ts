import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class TimerDataService {
  private timerSubject = new Subject<any>();
  private startCountSubject = new Subject<any>();
  private pausedCountSubject = new Subject<any>();
  private loggedEventsSubject = new Subject<any>();

  constructor() { }

  setCountDown(data) {
    this.timerSubject.next(data);
  }

  getCoundown() {
    return this.timerSubject.asObservable();
  }

  setStartCount(data) {
    this.startCountSubject.next(data);
  }

  getStartCount() {
    return this.startCountSubject.asObservable();
  }

  setPausedCount(data) {
    this.pausedCountSubject.next(data);
  }

  getPausedCount() {
    return this.pausedCountSubject.asObservable();
  }

  setLoggedEvents (data) {
    this.loggedEventsSubject.next(data);
  }

  getLoggedEvents() {
    return this.loggedEventsSubject.asObservable();
  }
}
