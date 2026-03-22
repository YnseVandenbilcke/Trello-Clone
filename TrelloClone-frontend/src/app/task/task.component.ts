import { Component, input, OnDestroy } from '@angular/core';
import { TaskDto, TasksService, TaskType } from '../../api';
import { NgClass } from '@angular/common';
import { from } from 'form-data';
import { finalize, Subject, takeUntil } from 'rxjs';
import { fromCancelable } from '../utils/rxjs-helpers';

@Component({
    selector: 'app-task',
    imports: [NgClass],
    templateUrl: './task.component.html',
    styleUrl: './task.component.less'
})
export class TaskComponent implements OnDestroy {
    public task = input<TaskDto | null>();

    private onDestroy$ = new Subject<void>();

    public ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    public getTaskTypeClass(type?: TaskType): string {
        switch (type) {
            case TaskType._0:
                return 'task-bug';
            case TaskType._1:
                return 'task-userstory';
            case TaskType._2:
                return 'task-task';
            case TaskType._3:
                return 'task-epic';
            default:
                return 'task-default';
        }
    }

    public async deleteTask(): Promise<void> {
        fromCancelable(TasksService.deleteApiTasks({ taskId: this.task()?.Id }))
            .pipe(takeUntil(this.onDestroy$))
            .subscribe({
                next: () => console.log('Deleted!'),
                error: (err) => console.error(err)
            });
    }
}
