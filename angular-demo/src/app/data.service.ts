import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getAllLists } from './data.config';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getAllLaunchDetails(): Observable<any> {
    return this.http.get(getAllLists);
  }

  public getFilteredData(query): Observable<any> {
    return this.http.get(getAllLists + query);
  }
}
