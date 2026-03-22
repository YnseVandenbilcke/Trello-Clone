import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardDto } from '../app/api-client';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private apiUrl = 'https://localhost:5001/api/board'; // match your backend URL

  constructor(private http: HttpClient) { }

  getBoards(): Observable<BoardDto[]> {
    return this.http.get<BoardDto[]>(this.apiUrl);
  }

  getBoardById(id: string) {
    return this.http.get<BoardDto>(`${this.apiUrl}/${id}`);
  }

  createBoard(board: BoardDto) {
    return this.http.post<BoardDto>(this.apiUrl, board);
  }
}