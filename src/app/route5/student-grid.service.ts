import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentGridService {

  constructor(
    private http: HttpClient
  ) { }

  configUrl = 'assets/config.json';

  getMarks() {
    return this.http.get('assets/marks.json');
  }
}
