import { Component, OnInit } from '@angular/core';
import { UserDataService, User } from '../service/data/user-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-control-single',
  templateUrl: './admin-user-control-single.component.html',
  styleUrls: ['./admin-user-control-single.component.css']
})
export class AdminUserControlSingleComponent implements OnInit {
  id: number = 0;
  unique_id: string = '';
  user: User = {id: 0, first_name: '', last_name: '', password: '', unique_id: '', is_admin: false};

  constructor(private userService: UserDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.unique_id = this.route.snapshot.params['unique_id'];
    if (this.id != -1) {
      this.userService.getUserById(this.id).subscribe(
        data => {
          this.user = data;
        }
      )
    }
  }

  backUserControl() {
    this.router.navigate(['adminUserControl', this.unique_id]);
  }

  saveUser() {
    if (this.id == -1) {
      this.userService.createUser(this.user).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminUserControl', this.unique_id]);
        }
      )
    }
    else {
      console.log('Here');
      this.userService.updateUser(this.user).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminUserControl', this.unique_id]);
        }
      )
    }
  }

}
