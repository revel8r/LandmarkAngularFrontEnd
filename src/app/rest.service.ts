import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'api/Landmark/';

@Injectable
({
  providedIn: 'root'
})
export class RestService 
{
  landmarks = '';
  result: Observable<any>;
  
  constructor(private http: HttpClient) { }

  private extractData(res: Response) 
  {
    let body = res;
    return body || { };
  }

  getLocalLandmarks(longitude, latitude, distance): Observable<any>
  {
    this.result = this.http.get
    (
      endpoint + '?longitude=' + longitude + '&latitude=' + latitude + '&distance=' + distance
    ).pipe
    (
        map(this.extractData)
    );

    return this.result;
  }
}  