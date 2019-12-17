import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  first_name = '';
  last_name = ''
  password = '';
  errorMessage = 'Either your name or password is not correct. Please check and try it again.';
  invalidLogin = false;

  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthService) {}

  ngOnInit() {}

  // handleLogin() {
  //   // console.log(this.username);
  //   if (this.hardcodedAuthService.authenticate(this.first_name, this.last_name, this.password)) {
  //     this.router.navigate(['welcome', this.first_name]);
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }

  handleLogin() {
    this.hardcodedAuthService.authenticate(this.first_name, this.last_name, this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome', data.unique_id]);   // pass user id
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}
