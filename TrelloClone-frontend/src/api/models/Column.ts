/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Board } from './Board';
import type { TaskItem } from './TaskItem';
export type Column = {
    Id?: string;
    Name?: string | null;
    BoardId?: string;
    Board?: Board;
    Tasks?: Array<TaskItem> | null;
};

