import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    public refreshBoard$ = new Subject<string | undefined>();

    constructor() { }

    public refreshBoard(boardId: string | undefined): void {
        this.refreshBoard$.next(boardId);
    }
}
