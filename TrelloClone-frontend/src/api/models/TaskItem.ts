/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Column } from './Column';
import type { TaskType } from './TaskType';
export type TaskItem = {
    id?: string;
    title?: string | null;
    description?: string | null;
    taskType?: TaskType;
    columnId?: string;
    column?: Column;
};

