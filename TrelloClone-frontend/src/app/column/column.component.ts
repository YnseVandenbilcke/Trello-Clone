import { Component, inject, input, OnDestroy } from '@angular/core';
import { ColumnDto, TasksService, TaskType } from '../../api';
import { TaskComponent } from "../task/task.component";
import { fromCancelable } from '../utils/rxjs-helpers';
import { Subject, takeUntil } from 'rxjs';
import { StateService } from '../../services/state.service';

@Component({
    selector: 'app-column',
    imports: [TaskComponent],
    templateUrl: './column.component.html',
    styleUrl: './column.component.less'
})
export class ColumnComponent implements OnDestroy {
    public column = input<ColumnDto | null>(null);
    public boardId = input<string | undefined>(undefined);

    private stateService = inject(StateService);
    private onDestroy$ = new Subject<void>();

    public ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public addTask(): void {
        fromCancelable(TasksService.postApiTasks({
            requestBody: {
                ColumnId: this.column()?.Id,
                Description: 'New',
                TaskType: TaskType._0,
                Title: 'New Task',
            }
        }))
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(() => {
                this.stateService.refreshBoard(this.boardId());
            });
    }
}
