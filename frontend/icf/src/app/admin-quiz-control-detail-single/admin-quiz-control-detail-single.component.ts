import { Component, OnInit } from '@angular/core';
import { Quiz, QuizDataService } from '../service/data/quiz-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectDataService } from '../service/data/project-data.service';

@Component({
  selector: 'app-admin-quiz-control-detail-single',
  templateUrl: './admin-quiz-control-detail-single.component.html',
  styleUrls: ['./admin-quiz-control-detail-single.component.css']
})
export class AdminQuizControlDetailSingleComponent implements OnInit {
  id: number = 0;
  unique_id: string = '';
  site_id: string = '';
  project_id: number = 0;
  quiz: Quiz = {id: 0, pid: 0, description: '', option1: '', option2: '', option3: '', option4: '', ans_idx: 0, ans_exp: ''};

  constructor(private quizService: QuizDataService, private projectService: ProjectDataService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    if (this.id != -1) {
      this.quizService.getQuizById(this.id).subscribe(
        data => {
          this.quiz = data;
        }
      )
    }
    if (this.id == -1) {
      this.projectService.getProjectBySiteId(this.site_id).subscribe(
        data => {
          this.project_id = data.id;
        }
      )
    }
  }

  backQuizControlDetails() {
    this.router.navigate(['adminQuizControlDetails', this.unique_id, this.site_id]);
  }

  saveQuiz() {
    if (this.id == -1) {
      this.quiz.pid = this.project_id;
      console.log(this.project_id);
      this.quizService.createQuiz(this.quiz).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminQuizControlDetails', this.unique_id, this.site_id]);
        }
      )
    }
    else {
      this.quizService.updateQuiz(this.quiz).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['adminQuizControlDetails', this.unique_id, this.site_id]);
        }
      )
    }
  }

}
