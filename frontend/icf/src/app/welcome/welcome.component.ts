import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDataService, Project } from '../service/data/project-data.service';
import { UserDataService } from '../service/data/user-data.service';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  first_name: string = '';
  unique_id: string = '';
  projects: Project[] = [];
  site_id: string = '';
  errorMessage = 'Invalid Site Id';
  invalidLogin = false;

  constructor(private router: Router, private route: ActivatedRoute, private userDataService: UserDataService, private projectDataService: ProjectDataService, private hardcodedAuthService: HardcodedAuthService) {}

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.userDataService.getUserByUniqueId(this.unique_id).subscribe(response => {
      this.first_name = response.first_name;
    });
    // this.projectDataService.getAllProjects('abcde').subscribe(response => {
    //   this.projects = response;
    // });
  }

  getWelcomeMessage() {
    console.log(this.projectDataService.getAllProjects());

    this.projectDataService.getAllProjects().subscribe(
      response => this.handleSuccessfulResponse(response)
      // error => this.handleErrorResponse(error)
    );

    console.log('last line of getWelcomeMessage');
  }

  handleSuccessfulResponse(response) {
    console.log('response', response);
    console.log('response description: ', response[1].description);
  }

  // handleErrorResponse(error) {
  // }
  handleProjectLogin() {
    this.hardcodedAuthService.authenticateProject(this.unique_id, this.site_id).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['confirmation', this.unique_id, this.site_id]);   // pass user id
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}
