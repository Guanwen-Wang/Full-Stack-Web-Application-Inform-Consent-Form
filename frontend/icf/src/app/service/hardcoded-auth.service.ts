import { Injectable } from '@angular/core';
import { UserDataService, User } from './data/user-data.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { Project } from './data/project-data.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  authenticate(first_name, last_name, password) {

    let params = new HttpParams();
    params = params.append('fname', first_name);
    params = params.append('lname', last_name);
    params = params.append('password', password);

    console.log('params', params)

    return this.http.get<User>(`${API_URL}/projectapi/users`, {params: params})
    .pipe(
      map (
        data => {
          sessionStorage.setItem('authenticatedUser', first_name);
          return data;
        }
      )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user == null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }

  authenticateProjectByOnlySiteId(site_id) {

    let params = new HttpParams();
    params = params.append('site_id', site_id);

    return this.http.get<Project>(`${API_URL}/projectapi/projects`, {params: params})
    .pipe(
      map (
        data => {
          return data;
        }
      )
    );
  }

  authenticateProject(unique_id, site_id) {

    let params = new HttpParams();
    params = params.append('unique_id', unique_id);
    params = params.append('site_id', site_id);

    return this.http.get<Project>(`${API_URL}/projectapi/projects`, {params: params})
    .pipe(
      map (
        data => {
          return data;
        }
      )
    );
  }

  authenticateAdmin(first_name, last_name, password) {

    let params = new HttpParams();
    params = params.append('fname', first_name);
    params = params.append('lname', last_name);
    params = params.append('password', password);

    console.log('params', params)

    return this.http.get<User>(`${API_URL}/projectapi/users`, {params: params})
    .pipe(
      map (
        data => {
          console.log('data', data);
          if (data.is_admin === true) {
            sessionStorage.setItem('authenticatedAdmin', first_name);
          }
          return data;
        }
      )
    );
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('authenticatedAdmin')
    return !(user == null)
  }

  logoutAdmin() {
    sessionStorage.removeItem('authenticatedAdmin')
  }

}
