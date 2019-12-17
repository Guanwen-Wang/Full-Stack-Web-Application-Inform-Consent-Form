import { Component, OnInit } from '@angular/core';
import { ProjectDetail, ProjectDetailDataService } from '../service/data/project-detail-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-project-control-details',
  templateUrl: './admin-project-control-details.component.html',
  styleUrls: ['./admin-project-control-details.component.css']
})
export class AdminProjectControlDetailsComponent implements OnInit {
  project_details: ProjectDetail[] = [];
  unique_id: string = '';
  project_id: number = 0;
  msg: string = '';

  constructor(private projectDetailService: ProjectDetailDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.project_id = this.route.snapshot.params['project_id'];
    this.projectDetailService.getProjectDetailsByProjectId(this.project_id).subscribe(response => {
      this.project_details = response;
    });
  }

  deleteProjectDetail(id) {
    // const username: string = this.users[id - 1].first_name + ' ' + this.users[id - 1].last_name;
    this.projectDetailService.deleteProjectDetailById(id).subscribe(
      resp => {
        this.msg = `The project detail was successfully deleted!`
        this.projectDetailService.getAllProjectDetails().subscribe(response => {
          this.project_details = response;
        });
      }
    )
  }

  updateProjectDetail(id) {
    this.router.navigate(['adminProjectControlDetailSingle', this.unique_id, this.project_id, id]);
  }

  addProjectDetail() {
    this.router.navigate(['adminProjectControlDetailSingle', this.unique_id, this.project_id, -1]);
  }

  backAdminProjectControl() {
    this.router.navigate(['adminProjectControl', this.unique_id]);
  }

}
