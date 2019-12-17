import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export interface UserProject {
  id: number;
  uid: number;
  pid: number;
  is_completed: boolean;
  is_signed: boolean;
  edu_start_time: number;
  icf_start_time: number;
  teachback_start_time: number;
  finish_time: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserProjectDataService {

  constructor(private http: HttpClient) { }

  getAllUserProjects() {
    return this.http.get<UserProject[]>(`${API_URL}/projectapi/project_users`);
  }

  getUserProjectById(id: number) {
    return this.http.get<UserProject>(`${API_URL}/projectapi/project_users/${id}`);
  }

  getUserProjectByUniqueIdAndSiteId(unique_id: string, site_id: string) {
    let params = new HttpParams();
    params = params.append('unique_id', unique_id);
    params = params.append('site_id', site_id);

    return this.http.get<UserProject>(`${API_URL}/projectapi/project_users`, {params: params})
  }

  // getUserProjectByUniqueId(unique_id: string) {
  //   let params = new HttpParams();
  //   params = params.append('unique_id', unique_id);

  //   return this.http.get<User>(`${API_URL}/projectapi/users`, {params: params})
  // }
  getUserProjectsByUid(uid: number) {
    let params = new HttpParams();
    params = params.append('uid', String(uid));

    return this.http.get<UserProject[]>(`${API_URL}/projectapi/project_users`, {params: params})
  }

  deleteUserProjectById(id: number) {
    return this.http.delete<UserProject>(`${API_URL}/projectapi/project_users/${id}`);
  }

  updateUserProject(userProject: UserProject) {
    return this.http.put<UserProject>(`${API_URL}/projectapi/project_users`, userProject);
  }

  createUserProject(userProject: UserProject) {
    return this.http.post<UserProject>(`${API_URL}/projectapi/project_users`, userProject);
  }
}
