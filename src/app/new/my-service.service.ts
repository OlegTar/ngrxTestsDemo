import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyServiceInterface } from './my-service';

@Injectable()
export class MyService implements MyServiceInterface {

  constructor(private http: HttpClient) { }

  public send(): Observable<string> {
    return this.http.get<string>('/test');
  }
}
