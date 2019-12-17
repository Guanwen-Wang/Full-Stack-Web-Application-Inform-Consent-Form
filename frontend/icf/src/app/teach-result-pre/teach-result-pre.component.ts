import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProject, UserProjectDataService } from '../service/data/user-project.service';

@Component({
  selector: 'app-teach-result-pre',
  templateUrl: './teach-result-pre.component.html',
  styleUrls: ['./teach-result-pre.component.css']
})
export class TeachResultPreComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';
  curUnixTime: number = new Date().getTime();
  userProject: UserProject = {id: 0, uid: 0, pid: 0, is_completed: false, is_signed: false, edu_start_time: 0, icf_start_time: 0, teachback_start_time: 0, finish_time: 0};

  constructor(private userProjectService: UserProjectDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    this.userProjectService.getUserProjectByUniqueIdAndSiteId(this.unique_id, this.site_id).subscribe(response => {
      console.log(response);
      this.userProject = response;
      this.userProject.is_completed = true;
      this.userProject.finish_time = this.curUnixTime;
    });
  }

  goTeachResultYes() {
    this.userProject.is_signed = true;
    this.userProjectService.updateUserProject(this.userProject).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['teachResult', this.unique_id, this.site_id]);
      }
    )
  }



  goTeachResultNo() {
    this.userProject.is_signed = false;
    this.userProjectService.updateUserProject(this.userProject).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['teachResult', this.unique_id, this.site_id]);
      }
    )
  }

}
