import { Component, input } from '@angular/core';
import { TaskDto, TaskType } from '../../api';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-task',
    imports: [NgClass],
    templateUrl: './task.component.html',
    styleUrl: './task.component.less'
})
export class TaskComponent {
    public task = input<TaskDto | null>();

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
}
