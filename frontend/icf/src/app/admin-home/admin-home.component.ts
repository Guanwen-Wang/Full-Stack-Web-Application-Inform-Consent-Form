import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  unique_id: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
  }

  goUserControl() {
    this.router.navigate(['adminUserControl', this.unique_id]);
  }

  goProjectControl() {
    this.router.navigate(['adminProjectControl', this.unique_id]);
  }

  goQuizControl() {
    this.router.navigate(['adminQuizControl', this.unique_id]);
  }
}
