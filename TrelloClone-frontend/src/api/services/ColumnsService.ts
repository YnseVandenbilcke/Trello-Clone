/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Column } from '../models/Column';
import type { ColumnDto } from '../models/ColumnDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ColumnsService {
    /**
     * @returns ColumnDto OK
     * @throws ApiError
     */
    public static getApiColumns(): CancelablePromise<Array<ColumnDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Columns',
        });
    }
    /**
     * @returns Column OK
     * @throws ApiError
     */
    public static postApiColumns({
        requestBody,
    }: {
        requestBody?: Column,
    }): CancelablePromise<Column> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Columns',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns ColumnDto OK
     * @throws ApiError
     */
    public static getApiColumns1({
        id,
    }: {
        id: string,
    }): CancelablePromise<ColumnDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Columns/{id}',
            path: {
                'id': id,
            },
        });
    }
}
