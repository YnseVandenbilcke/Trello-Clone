/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskDto } from '../models/TaskDto';
import type { TaskItem } from '../models/TaskItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TasksService {
    /**
     * @returns TaskDto OK
     * @throws ApiError
     */
    public static getApiTasks(): CancelablePromise<Array<TaskDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Tasks',
        });
    }
    /**
     * @returns TaskItem OK
     * @throws ApiError
     */
    public static postApiTasks({
        requestBody,
    }: {
        requestBody?: TaskItem,
    }): CancelablePromise<TaskItem> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Tasks',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static deleteApiTasks({
        taskId,
    }: {
        taskId?: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Tasks',
            query: {
                'taskId': taskId,
            },
        });
    }
    /**
     * @returns TaskDto OK
     * @throws ApiError
     */
    public static getApiTasks1({
        id,
    }: {
        id: string,
    }): CancelablePromise<TaskDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Tasks/{id}',
            path: {
                'id': id,
            },
        });
    }
}
