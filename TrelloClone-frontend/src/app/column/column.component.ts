import { Component, input } from '@angular/core';
import { ColumnDto } from '../../api';
import { TaskComponent } from "../task/task.component";

@Component({
    selector: 'app-column',
    imports: [TaskComponent],
    templateUrl: './column.component.html',
    styleUrl: './column.component.less'
})
export class ColumnComponent {
    public column = input<ColumnDto | null>(null);
}
