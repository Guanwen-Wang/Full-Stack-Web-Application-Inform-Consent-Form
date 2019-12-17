import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export interface Quiz {
  id: number;
  pid: number;
  description: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans_idx: number;
  ans_exp: string;
}
@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  constructor(private http: HttpClient) { }

  getAllQuizzes() {
    return this.http.get<Quiz[]>(`${API_URL}/projectapi/quizzes`);
  }

  getQuizById(id: number) {
    return this.http.get<Quiz>(`${API_URL}/projectapi/quizzes/${id}`);
  }

  getQuizzesBySiteId(site_id: string) {
    let params = new HttpParams();
    params = params.append('site_id', site_id);

    return this.http.get<Quiz[]>(`${API_URL}/projectapi/quizzes`, {params: params})
  }

  deleteQuizById(id: number) {
    return this.http.delete<Quiz>(`${API_URL}/projectapi/quizzes/${id}`);
  }

  updateQuiz(quiz: Quiz) {
    return this.http.put<Quiz>(`${API_URL}/projectapi/quizzes`, quiz);
  }

  createQuiz(quiz: Quiz) {
    return this.http.post<Quiz>(`${API_URL}/projectapi/quizzes`, quiz);
  }
}
