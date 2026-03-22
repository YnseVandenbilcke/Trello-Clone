import { Component, OnDestroy, OnInit, output, signal } from '@angular/core';
import { Board, BoardDto, BoardService } from '../../api';
import { finalize, from, Subject, takeUntil } from 'rxjs';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
    selector: 'app-board-overview',
    imports: [SpinnerComponent],
    templateUrl: './board-overview.component.html',
    styleUrl: './board-overview.component.less'
})
export class BoardOverviewComponent implements OnInit, OnDestroy {
    public boards = signal<BoardDto[]>([]);
    public loading = signal<boolean>(true);

    public boardClicked = output<BoardDto | null>();

    private onDestroy$ = new Subject<void>();

    public ngOnInit(): void {
        this.loading.set(true);
        from(BoardService.getApiBoard())
            .pipe(takeUntil(this.onDestroy$), finalize(() => {
                this.loading.set(false)
            }))
            .subscribe((result) => {
                this.boards.set(result);
            });
    }

    public ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public onBoardClick(event?: BoardDto): void {
        this.boardClicked.emit(event ?? null);
    }
}
