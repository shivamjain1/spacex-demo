import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAllLists, getLaunchByYear } from './data.config';

// const featureConfig = require('./data.config');


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getAllLaunchDetails(): Observable<any> {
    return this.http.get(getAllLists);
  }

  public getLaunchesByYear(year: string): Observable<any> {
    return this.http.get(`${getLaunchByYear}${year}`);
  }
}
