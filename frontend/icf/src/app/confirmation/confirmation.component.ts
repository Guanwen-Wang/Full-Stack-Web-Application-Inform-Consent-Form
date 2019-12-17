import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectDataService } from '../service/data/project-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';
  project_name = '';

  constructor(private router: Router, private route: ActivatedRoute, private projectDataService: ProjectDataService) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    this.projectDataService.getProjectByUniqueIdAndSiteId(this.unique_id, this.site_id).subscribe(response => {
      this.project_name = response.name;
    });
    console.log(this.site_id);
  }

  backWelcome() {
    this.router.navigate(['welcome', this.unique_id]);
  }

  goToSummary() {
    this.router.navigate(['summaryAfterConfirm', this.unique_id, this.site_id]);
  }
}
