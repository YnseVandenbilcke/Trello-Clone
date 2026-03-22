import { Component, input } from '@angular/core';
import { BoardDto } from '../../api';
import { ColumnComponent } from "../column/column.component";

@Component({
    selector: 'app-board-display',
    imports: [ColumnComponent],
    templateUrl: './board-display.component.html',
    styleUrl: './board-display.component.less'
})
export class BoardDisplayComponent {
    public board = input<BoardDto | null>(null);
}
