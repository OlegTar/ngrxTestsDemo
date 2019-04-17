import { Observable } from 'rxjs';

export interface MyServiceInterface {
    send: () => Observable<string>;
}
