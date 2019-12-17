import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProject, UserProjectDataService } from '../service/data/user-project.service';

@Component({
  selector: 'app-summary-after-confirm',
  templateUrl: './summary-after-confirm.component.html',
  styleUrls: ['./summary-after-confirm.component.css']
})
export class SummaryAfterConfirmComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';
  userProject: UserProject = {id: 0, uid: 0, pid: 0, is_completed: false, is_signed: false, edu_start_time: 0, icf_start_time: 0, teachback_start_time: 0, finish_time: 0};
  curUnixTime: number = new Date().getTime();

  constructor(private userProjectService: UserProjectDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    this.userProjectService.getUserProjectByUniqueIdAndSiteId(this.unique_id, this.site_id).subscribe(response => {
      console.log(response);
      this.userProject = response;
      this.userProject.edu_start_time = this.curUnixTime;
    });
  }

  goToEducation() {
    // this.router.navigate(['yourProject', this.unique_id, this.site_id]);
    this.userProjectService.updateUserProject(this.userProject).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['yourProject', this.unique_id, this.site_id]);
      }
    )
  }
}
