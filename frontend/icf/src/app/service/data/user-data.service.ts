import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export interface User {
  id: number,
  first_name: string,
  last_name: string,
  password: string,
  unique_id: string,
  is_admin: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  // getUserByFirstNameAndLastNameAndPassword(first_name: string, last_name: string, password: string) {
  //   return this.http.get<User>(`${API_URL}/projectapi/users?first_name=${first_name}&last_name=${last_name}&password=${password}`);
  // }

  getAllUsers() {
    return this.http.get<User[]>(`${API_URL}/projectapi/users`);
  }

  getUserById(id: number) {
    return this.http.get<User>(`${API_URL}/projectapi/users/${id}`);
  }

  getUserByUniqueId(unique_id: string) {
    let params = new HttpParams();
    params = params.append('unique_id', unique_id);

    return this.http.get<User>(`${API_URL}/projectapi/users`, {params: params})
  }

  deleteUserById(id: number) {
    return this.http.delete<User>(`${API_URL}/projectapi/users/${id}`);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${API_URL}/projectapi/users`, user);
  }

  createUser(user: User) {
    return this.http.post<User>(`${API_URL}/projectapi/users`, user);
  }
}
