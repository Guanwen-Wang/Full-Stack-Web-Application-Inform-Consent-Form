import { Component, OnInit } from '@angular/core';
import { ProjectDetail, ProjectDetailDataService } from '../service/data/project-detail-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-project-control-detail-single',
  templateUrl: './admin-project-control-detail-single.component.html',
  styleUrls: ['./admin-project-control-detail-single.component.css']
})
export class AdminProjectControlDetailSingleComponent implements OnInit {
  id: number = 0;
  unique_id: string = '';
  project_id: number = 0;
  project_detail: ProjectDetail = {id: 0, pid: 0, title: '', content: ''};

  constructor(private projectDetailService: ProjectDetailDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.project_id = this.route.snapshot.params['project_id'];
    if (this.id != -1) {
      this.projectDetailService.getProjectDetailById(this.id).subscribe(
        data => {
          this.project_detail = data;
        }
      )
    }
  }

  backProjectControlDetails() {
    this.router.navigate(['adminProjectControlDetails', this.unique_id, this.project_id]);
  }

  saveProjectDetail() {
    if (this.id == -1) {
      this.project_detail.pid = Number(this.project_id);
      console.log('this.project_detail POST', this.project_detail);
      this.projectDetailService.createProjectDetail(this.project_detail).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminProjectControlDetails', this.unique_id, this.project_id]);
        }
      )
    }
    else {
      console.log('this.project_detail UPDATE', this.project_detail);
      this.projectDetailService.updateProjectDetail(this.project_detail).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminProjectControlDetails', this.unique_id, this.project_id]);
        }
      )
    }
  }

}
