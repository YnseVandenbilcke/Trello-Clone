/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Column } from './Column';
import type { TaskType } from './TaskType';
export type TaskItem = {
    Id?: string;
    Title?: string | null;
    Description?: string | null;
    TaskType?: TaskType;
    ColumnId?: string;
    Column?: Column;
};

