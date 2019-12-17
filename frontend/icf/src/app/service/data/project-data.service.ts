import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export interface Project {
  id: number,
  // uid: number,
  site_id: string,
  name: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  constructor(private http: HttpClient) {}

  getAllProjects() {
    return this.http.get<Project[]>(`${API_URL}/projectapi/projects`);
  }

  getProjectById(id: number) {
    return this.http.get<Project>(`${API_URL}/projectapi/projects/${id}`);
  }

  getProjectByUidAndSiteId(uid: number, site_id: string) {   // nonsense
    let params = new HttpParams();
    params = params.append('uid', String(uid));
    params = params.append('site_id', site_id);

    return this.http.get<Project>(`${API_URL}/projectapi/projects`, {params: params})
  }

  getProjectByUniqueIdAndSiteId(unique_id: string, site_id: string) {   // nonsense
    let params = new HttpParams();
    params = params.append('unique_id', unique_id);
    params = params.append('site_id', site_id);

    return this.http.get<Project>(`${API_URL}/projectapi/projects`, {params: params})
  }

  getProjectBySiteId(site_id: string) {
    let params = new HttpParams();
    params = params.append('site_id', site_id);

    return this.http.get<Project>(`${API_URL}/projectapi/projects`, {params: params})
  }

  getProjectsByUid(uid: number) {
    let params = new HttpParams();
    params = params.append('uid', String(uid));

    return this.http.get<Project[]>(`${API_URL}/projectapi/projects`, {params: params})
  }

  deleteProjectById(id: number) {
    return this.http.delete<Project>(`${API_URL}/projectapi/projects/${id}`);
  }

  updateProject(project: Project) {
    return this.http.put<Project>(`${API_URL}/projectapi/projects`, project);
  }

  createProject(project: Project) {
    return this.http.post<Project>(`${API_URL}/projectapi/projects`, project);
  }
}
