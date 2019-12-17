import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProject, UserProjectDataService } from '../service/data/user-project.service';

@Component({
  selector: 'app-teach-module-pre',
  templateUrl: './teach-module-pre.component.html',
  styleUrls: ['./teach-module-pre.component.css']
})
export class TeachModulePreComponent implements OnInit {
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
      // this.userProject.edu_start_time = this.curUnixTime;
    });
  }

  backIcfModule() {
    this.router.navigate(['icfModule', this.unique_id, this.site_id]);
  }

  goTeachModule() {
    // this.router.navigate(['teachModule', this.unique_id, this.site_id]);
    this.curUnixTime = new Date().getTime();
    this.userProject.teachback_start_time = this.curUnixTime;
    this.userProjectService.updateUserProject(this.userProject).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['teachModule', this.unique_id, this.site_id]);
      }
    )
  }

}
