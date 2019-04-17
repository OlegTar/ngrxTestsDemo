import { MyServiceInterface } from './my-service';
import { of } from 'rxjs';

export class MyServiceFake implements MyServiceInterface {
    send() {
        return of('test');
    }
}
