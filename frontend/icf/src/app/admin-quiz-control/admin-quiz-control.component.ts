import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-admin-quiz-control',
  templateUrl: './admin-quiz-control.component.html',
  styleUrls: ['./admin-quiz-control.component.css']
})
export class AdminQuizControlComponent implements OnInit {
  site_id: string = '';
  unique_id: string = '';
  errorMessage = 'Invalid Site Id';
  invalidLogin = false;

  constructor(private router: Router, private route: ActivatedRoute, private hardcodedAuthService: HardcodedAuthService) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
  }

  handleSiteIDLogin() {
    this.hardcodedAuthService.authenticateProjectByOnlySiteId(this.site_id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['adminQuizControlDetails', this.unique_id, this.site_id]);   // pass user id
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }

  backAdminHome() {
    this.router.navigate(['adminHome', this.unique_id]);
  }
}
