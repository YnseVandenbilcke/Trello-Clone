import { Component, OnInit, signal } from '@angular/core';
import { Subject, takeUntil, from } from 'rxjs';
import { BoardDto, BoardService } from '../api';
import { BoardOverviewComponent } from './board-overview/board-overview.component';
import { BoardDisplayComponent } from "./board-display/board-display.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    imports: [BoardOverviewComponent, BoardDisplayComponent]
})
export class AppComponent {
    public title = 'TrelloClone-frontend';
    public selectedBoard = signal<BoardDto | null>(null);

    public setSelectedBoard(board: BoardDto | null): void {
        this.selectedBoard.set(board);
    }
}