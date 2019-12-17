import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProjectDataService, UserProject } from '../service/data/user-project.service';
import { UserDataService, User } from '../service/data/user-data.service';
import { ProjectDataService, Project } from '../service/data/project-data.service';

@Component({
  selector: 'app-admin-user-control-project-status',
  templateUrl: './admin-user-control-project-status.component.html',
  styleUrls: ['./admin-user-control-project-status.component.css']
})
export class AdminUserControlProjectStatusComponent implements OnInit {
  unique_id: string = '';
  uid: number = 0;
  userProjects: UserProject[] = [];
  projects: Project[] = [];
  user: User = {id: 0, first_name: '', last_name: '', password: '', unique_id: '', is_admin: false};
  fullname: string = '';
  msg: string = '';

  constructor(private userProjectService: UserProjectDataService, private userService: UserDataService, private projectService: ProjectDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.uid = this.route.snapshot.params['uid'];
    this.userProjectService.getUserProjectsByUid(this.uid).subscribe(response => {
      console.log(response);
      this.userProjects = response;
    });
    this.projectService.getProjectsByUid(this.uid).subscribe(response => {
      console.log(response);
      this.projects = response;
    });
    this.userService.getUserById(this.uid).subscribe(response => {
      this.user = response;
      this.fullname = this.user.first_name + ' ' + this.user.last_name;
    })
  }

  deleteUserProject(id) {
    // console.log(`delete user ${id}`);
    this.userProjectService.deleteUserProjectById(id).subscribe(
      resp => {
        this.msg = 'The project for ' + this.fullname + ' was successfully deleted!';
        this.userProjectService.getUserProjectsByUid(this.uid).subscribe(response => {
          console.log(response);
          this.userProjects = response;
        });
        this.projectService.getProjectsByUid(this.uid).subscribe(response => {
          console.log(response);
          this.projects = response;
        });
      }
    )
  }

  backUserControl() {
    this.router.navigate(['adminUserControl', this.unique_id]);
  }

  addUserProject() {
    this.router.navigate(['adminUserControlProjectStatusSingle', this.unique_id, this.uid])
  }

  getEduTime(userProject: UserProject) {
    let diff = userProject.icf_start_time - userProject.edu_start_time;
    if (!userProject.is_completed) {
      return 'none';
    }
    return this.calculateTimeDiff(diff);
  }

  getIcfTime(userProject: UserProject) {
    let diff = userProject.teachback_start_time - userProject.icf_start_time;
    if (!userProject.is_completed) {
      return 'none';
    }
    return this.calculateTimeDiff(diff);
  }

  getTeachbackTime(userProject: UserProject) {
    let diff = userProject.finish_time - userProject.teachback_start_time;
    if (!userProject.is_completed) {
      return 'none';
    }
    return this.calculateTimeDiff(diff);
  }

  calculateTimeDiff(diff) {
    let timediff: number = Math.round(diff / 1000);
    let second: number = Math.round(timediff % 60);
    timediff = Math.round(timediff / 60);
    let minute: number = Math.round(timediff % 60);
    timediff = Math.round(timediff / 60);
    let hour: number = Math.round(timediff % 60);
    return hour + 'h ' + minute + 'm ' + second + 's';
  }

}
