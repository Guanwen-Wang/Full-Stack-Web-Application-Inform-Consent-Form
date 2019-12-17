import { Component, OnInit } from '@angular/core';
import { Project, ProjectDataService } from '../service/data/project-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-project-control-single',
  templateUrl: './admin-project-control-single.component.html',
  styleUrls: ['./admin-project-control-single.component.css']
})
export class AdminProjectControlSingleComponent implements OnInit {
  id: number = 0;
  unique_id: string = '';
  project: Project = {id: 0, site_id: '', name: ''};

  constructor(private projectService: ProjectDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.unique_id = this.route.snapshot.params['unique_id'];
    if (this.id != -1) {
      this.projectService.getProjectById(this.id).subscribe(
        data => {
          this.project = data;
        }
      )
    }
  }

  backProjectControl() {
    this.router.navigate(['adminProjectControl', this.unique_id]);
  }

  saveProject() {
    if (this.id == -1) {
      this.projectService.createProject(this.project).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminProjectControl', this.unique_id]);
        }
      )
    }
    else {
      this.projectService.createProject(this.project).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminProjectControl', this.unique_id]);
        }
      )
    }
  }
}
