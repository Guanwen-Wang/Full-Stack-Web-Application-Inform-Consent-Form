import { Component, OnInit } from '@angular/core';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  first_name = '';
  last_name = ''
  password = '';
  errorMessage = '';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
  }

  handleLogin() {
    this.hardcodedAuthService.authenticateAdmin(this.first_name, this.last_name, this.password).subscribe(
      data => {
        console.log(data);
        if (data.is_admin) {
          this.router.navigate(['adminHome', data.unique_id]);   // pass user id
          this.invalidLogin = false;
        }
        else {
          this.errorMessage = 'This user doesn\'t belong to admin. Please check and try it again.';
          this.invalidLogin = true;
        }
      },
      error => {
        console.log(error);
        this.errorMessage = 'Either your name or password is not correct. Please check and try it again.';
        this.invalidLogin = true;
      }
    )
  }

}
