/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Board } from '../models/Board';
import type { BoardDto } from '../models/BoardDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BoardService {
    /**
     * @returns BoardDto OK
     * @throws ApiError
     */
    public static getApiBoard(): CancelablePromise<Array<BoardDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Board',
        });
    }
    /**
     * @returns Board OK
     * @throws ApiError
     */
    public static postApiBoard({
        requestBody,
    }: {
        requestBody?: Board,
    }): CancelablePromise<Board> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Board',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns BoardDto OK
     * @throws ApiError
     */
    public static getApiBoard1({
        id,
    }: {
        id: string,
    }): CancelablePromise<BoardDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Board/{id}',
            path: {
                'id': id,
            },
        });
    }
}
