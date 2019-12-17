import { Component, OnInit } from '@angular/core';
import { User, UserDataService } from '../service/data/user-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-control',
  templateUrl: './admin-user-control.component.html',
  styleUrls: ['./admin-user-control.component.css']
})
export class AdminUserControlComponent implements OnInit {
  users: User[] = [];
  unique_id: string = '';
  msg: string = '';

  constructor(private userService: UserDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
    });
  }

  deleteUser(id) {
    // console.log(`delete user ${id}`);
    this.userService.deleteUserById(id).subscribe(
      resp => {
        this.msg = `The user was successfully deleted!`
        this.userService.getAllUsers().subscribe(response => {
          this.users = response;
        });
      }
    )
  }

  updateUser(id) {
    this.router.navigate(['adminUserControlSingle', this.unique_id, id]);
  }

  seeUserProjectStatus(uid) {
    this.router.navigate(['adminUserControlProjectStatus', this.unique_id, uid]);
  }

  addUser() {
    this.router.navigate(['adminUserControlSingle', this.unique_id, -1]);
  }

  backAdminHome() {
    this.router.navigate(['adminHome', this.unique_id]);
  }

}
