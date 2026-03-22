/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Board } from './Board';
import type { TaskItem } from './TaskItem';
export type Column = {
    id?: string;
    name?: string | null;
    boardId?: string;
    board?: Board;
    tasks?: Array<TaskItem> | null;
};

