import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectDetailDataService } from '../service/data/project-detail-data.service';

@Component({
  selector: 'app-icf-module-pre',
  templateUrl: './icf-module-pre.component.html',
  styleUrls: ['./icf-module-pre.component.css']
})
export class IcfModulePreComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';
  projectDetailTitles: string[] = [];
  loaded: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private projectDetailDataService: ProjectDetailDataService) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];

    this.projectDetailDataService.getProjectDetailsBySiteId(this.site_id).subscribe(response => {
      for (let i = 0; i < response.length; i++) {
        this.projectDetailTitles.push(response[i].title);
      }
      this.loaded = true;
    });
  }

  backEduModule() {
    this.router.navigate(['eduModule', this.unique_id, this.site_id]);
  }

  goIcfModule() {
    this.router.navigate(['icfModule', this.unique_id, this.site_id]);
  }

}
