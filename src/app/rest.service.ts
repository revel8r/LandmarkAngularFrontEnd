import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://revel8r.net/api/Landmark/Get?';

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

    console.info('rest.service.ts response = ' + res.status);

    return body || { };
  }

  getLocalLandmarks(longitude, latitude, distance): Observable<any>
  {
    console.info('rest.service.ts: endpoint = ' + endpoint);

    this.result = this.http.get<any>
    (
      endpoint + 'longitude=' + longitude + '&latitude=' + latitude + '&distance=' + distance
    ).pipe
    (
        map(this.extractData)
    );

    return this.result;
  }
}  