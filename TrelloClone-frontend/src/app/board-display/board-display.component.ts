import { Component, effect, inject, input, OnDestroy, OnInit, signal } from '@angular/core';
import { BoardDto, BoardService } from '../../api';
import { ColumnComponent } from "../column/column.component";
import { finalize, Subject, Subscription, takeUntil } from 'rxjs';
import { StateService } from '../../services/state.service';
import { fromCancelable } from '../utils/rxjs-helpers';

@Component({
    selector: 'app-board-display',
    imports: [ColumnComponent],
    templateUrl: './board-display.component.html',
    styleUrl: './board-display.component.less'
})
export class BoardDisplayComponent implements OnInit, OnDestroy {
    public inputBoard = input<BoardDto | null>(null);
    public board = signal<BoardDto | null>(null);

    private onDestroy$ = new Subject<void>();
    private _updateBoard = Subscription.EMPTY;
    private stateService = inject(StateService);

    constructor() {
        effect(() => {
            this.board.set(this.inputBoard());
        })
    }

    public ngOnInit(): void {
        this.registerSubscriptions();
    }

    public ngOnDestroy(): void {
        this._updateBoard?.unsubscribe();

        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public registerSubscriptions(): void {
        this._updateBoard = this.stateService.refreshBoard$.subscribe((result) => {
            this.getBoard(result);
        })
    }

    private getBoard(boardId: string | undefined): void {
        fromCancelable(BoardService.getApiBoard1({
            id: boardId ?? '',
        }))
            .pipe(
                takeUntil(this.onDestroy$),
                finalize(() => { })
            )
            .subscribe((result) => {
                this.board.set(result);
            });

    }
}
