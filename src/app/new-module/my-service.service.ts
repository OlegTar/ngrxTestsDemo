import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MyServiceInterface } from './my-service';

@Injectable()
export class MyService implements MyServiceInterface {

  constructor(private http: HttpClient) { }

  public send(): Observable<string> {
    return this.http.get<string>('/test');
  }
}
