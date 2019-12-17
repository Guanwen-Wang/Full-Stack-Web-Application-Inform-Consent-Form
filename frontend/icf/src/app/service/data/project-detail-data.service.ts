import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export interface ProjectDetail {
  id: number,
  pid: number,
  title: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailDataService {

  constructor(private http: HttpClient) { }

  getAllProjectDetails() {
    return this.http.get<ProjectDetail[]>(`${API_URL}/projectapi/project_details`);
  }

  getProjectDetailsBySiteId(site_id: string) {
    let params = new HttpParams();
    params = params.append('site_id', site_id);

    return this.http.get<ProjectDetail[]>(`${API_URL}/projectapi/project_details`, {params: params})
  }

  getProjectDetailsByProjectId(project_id: number) {
    let params = new HttpParams();
    params = params.append('project_id', String(project_id));

    return this.http.get<ProjectDetail[]>(`${API_URL}/projectapi/project_details`, {params: params})
  }

  getProjectDetailById(id: number) {
    return this.http.get<ProjectDetail>(`${API_URL}/projectapi/project_details/${id}`);
  }

  deleteProjectDetailById(id: number) {
    return this.http.delete<ProjectDetail>(`${API_URL}/projectapi/project_details/${id}`);
  }

  updateProjectDetail(project_detail: ProjectDetail) {
    return this.http.put<ProjectDetail>(`${API_URL}/projectapi/project_details`, project_detail);
  }

  createProjectDetail(project_detail: ProjectDetail) {
    return this.http.post<ProjectDetail>(`${API_URL}/projectapi/project_details`, project_detail);
  }
}
