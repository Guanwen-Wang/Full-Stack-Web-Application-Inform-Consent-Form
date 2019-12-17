import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
    this.hardcodedAuthService.logout();
  }

  goHomePage() {
    this.router.navigate(['']);
  }

}
