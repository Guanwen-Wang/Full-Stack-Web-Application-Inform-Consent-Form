import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-teach-result',
  templateUrl: './teach-result.component.html',
  styleUrls: ['./teach-result.component.css']
})
export class TeachResultComponent implements OnInit {

  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
  }

  backMainPage() {
    this.router.navigate(['']);
    this.hardcodedAuthService.logout();
  }
}
