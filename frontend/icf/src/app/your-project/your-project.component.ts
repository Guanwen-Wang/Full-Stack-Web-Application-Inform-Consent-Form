import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-your-project',
  templateUrl: './your-project.component.html',
  styleUrls: ['./your-project.component.css']
})
export class YourProjectComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
  }

  goEduModule() {
    this.router.navigate(['eduModule', this.unique_id, this.site_id]);
  }
}
