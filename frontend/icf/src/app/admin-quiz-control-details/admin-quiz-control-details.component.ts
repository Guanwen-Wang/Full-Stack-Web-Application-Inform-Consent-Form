import { Component, OnInit } from '@angular/core';
import { Quiz, QuizDataService } from '../service/data/quiz-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-quiz-control-details',
  templateUrl: './admin-quiz-control-details.component.html',
  styleUrls: ['./admin-quiz-control-details.component.css']
})
export class AdminQuizControlDetailsComponent implements OnInit {
  quizzes: Quiz[] = [];
  unique_id: string = '';
  site_id: string = '';
  msg: string = '';

  constructor(private quizService: QuizDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    this.quizService.getQuizzesBySiteId(this.site_id).subscribe(response => {
      this.quizzes = response;
    });
  }

  deleteQuiz(id) {
    // const username: string = this.users[id - 1].first_name + ' ' + this.users[id - 1].last_name;
    this.quizService.deleteQuizById(id).subscribe(
      resp => {
        this.msg = `The quiz was successfully deleted!`
        this.quizService.getQuizzesBySiteId(this.site_id).subscribe(response => {
          this.quizzes = response;
        });
      }
    )
  }

  updateQuiz(id) {
    this.router.navigate(['adminQuizControlDetailSingle', this.unique_id, this.site_id, id]);
  }

  addQuiz() {
    this.router.navigate(['adminQuizControlDetailSingle', this.unique_id, this.site_id, -1]);
  }

  backAdminQuizControl() {
    this.router.navigate(['adminQuizControl', this.unique_id]);
  }

}
