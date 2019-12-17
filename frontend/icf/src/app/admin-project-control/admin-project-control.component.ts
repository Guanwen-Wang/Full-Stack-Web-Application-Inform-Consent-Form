import { Component, OnInit } from '@angular/core';
import { Project, ProjectDataService } from '../service/data/project-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-project-control',
  templateUrl: './admin-project-control.component.html',
  styleUrls: ['./admin-project-control.component.css']
})
export class AdminProjectControlComponent implements OnInit {
  projects: Project[] = [];
  unique_id: string = '';
  msg: string = '';

  constructor(private projectService: ProjectDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.projectService.getAllProjects().subscribe(response => {
      this.projects = response;
    });
  }

  deleteProject(id) {
    // const username: string = this.users[id - 1].first_name + ' ' + this.users[id - 1].last_name;
    this.projectService.deleteProjectById(id).subscribe(
      resp => {
        this.msg = `The project was successfully deleted!`
        this.projectService.getAllProjects().subscribe(response => {
          this.projects = response;
        });
      }
    )
  }

  updateProject(id) {
    this.router.navigate(['adminProjectControlSingle', this.unique_id, id]);
  }

  goProjectDetail(id) {
    this.router.navigate(['adminProjectControlDetails', this.unique_id, id]);
  }

  addProject() {
    this.router.navigate(['adminProjectControlSingle', this.unique_id, -1]);
  }

  backAdminHome() {
    this.router.navigate(['adminHome', this.unique_id]);
  }

}
