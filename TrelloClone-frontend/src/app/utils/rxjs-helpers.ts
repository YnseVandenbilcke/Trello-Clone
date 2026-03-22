import { Observable } from 'rxjs';
import { CancelablePromise } from '../../api';

export function fromCancelable<T>(p: CancelablePromise<T>): Observable<T> {
    return new Observable<T>((subscriber) => {
        p.then((result) => {
            subscriber.next(result);
            subscriber.complete();
        }).catch((err) => subscriber.error(err));

        return () => p.cancel?.();
    });
}