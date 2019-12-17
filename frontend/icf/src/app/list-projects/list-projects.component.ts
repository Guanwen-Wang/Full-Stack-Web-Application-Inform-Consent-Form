import { Component, OnInit } from '@angular/core';
import { Project, ProjectDataService } from '../service/data/project-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {
  projects: Project[] = [];
  constructor(private projectService: ProjectDataService, private router: Router) {}

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(response => {
      this.projects = response;
    });
  }

  seeProjectDetail(id: number) {
    this.router.navigate(['projects', id]);
  }
}
