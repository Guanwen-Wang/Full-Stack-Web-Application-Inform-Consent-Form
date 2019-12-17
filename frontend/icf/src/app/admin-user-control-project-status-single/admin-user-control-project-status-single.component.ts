import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProject, UserProjectDataService } from '../service/data/user-project.service';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { User, UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-admin-user-control-project-status-single',
  templateUrl: './admin-user-control-project-status-single.component.html',
  styleUrls: ['./admin-user-control-project-status-single.component.css']
})
export class AdminUserControlProjectStatusSingleComponent implements OnInit {
  uid: number = 0;
  unique_id: string = '';
  site_id: string = '';
  errorMessage = 'Invalid Site Id';
  invalidLogin = false;
  userProject: UserProject = {id: 0, uid: 0, pid: 0, is_completed: false, is_signed: false, edu_start_time: 0, icf_start_time: 0, teachback_start_time: 0, finish_time: 0};
  user: User = {id: 0, first_name: '', last_name: '', password: '', unique_id: '', is_admin: false};
  user_unique_id: string = '';

  constructor(private hardcodedAuthService: HardcodedAuthService, private userProjectService: UserProjectDataService, private userService: UserDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.uid = this.route.snapshot.params['uid'];
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.userService.getUserById(this.uid).subscribe(
      data => {
        this.user = data;
        this.user_unique_id = data.unique_id;
        this.userProject.uid = data.id;
      }
    )
  }

  backUserControlProjectStatus() {
    this.router.navigate(['adminUserControlProjectStatus', this.unique_id, this.uid]);
  }

  handleSiteIDLogin() {
    this.hardcodedAuthService.authenticateProjectByOnlySiteId(this.site_id).subscribe(
      data => {
        console.log(data);
        this.userProject.pid = data.id;
        this.userProjectService.createUserProject(this.userProject).subscribe(data2 => {
            console.log(data2);
            this.router.navigate(['adminUserControlProjectStatus', this.unique_id, this.uid]);
          }
        )
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }

}
