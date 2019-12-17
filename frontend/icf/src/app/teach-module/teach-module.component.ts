import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Quiz, QuizDataService } from '../service/data/quiz-data.service';

@Component({
  selector: 'app-teach-module',
  templateUrl: './teach-module.component.html',
  styleUrls: ['./teach-module.component.css']
})

export class TeachModuleComponent implements OnInit {
  unique_id: string = '';
  site_id: string = '';
  quizzes: Quiz[] = [];
  progress: number = 0;
  choices: number[] = [];
  loaded: boolean = false;
  // numCorrect: number = 0;
  progressBarWidth = 0;
  constructor(private router: Router, private route: ActivatedRoute, private quizDataService: QuizDataService) { }

  ngOnInit() {
    this.unique_id = this.route.snapshot.params['unique_id'];
    this.site_id = this.route.snapshot.params['site_id'];
    this.quizDataService.getQuizzesBySiteId(this.site_id).subscribe(response => {
      console.log('response', response);
      this.quizzes = response;
      this.loaded = true;
      this.progressBarWidth = 1 / this.quizzes.length * 100;
    });
  }

  Submit() {
    const a = document.getElementById('customRadio1') as HTMLInputElement;
    const b = document.getElementById('customRadio2') as HTMLInputElement;
    const c = document.getElementById('customRadio3') as HTMLInputElement;
    // const d = document.getElementById('customRadio4') as HTMLInputElement;
    if (a.checked && this.quizzes[this.progress].ans_idx === 0 ||
        b.checked && this.quizzes[this.progress].ans_idx === 1 ||
        c.checked && this.quizzes[this.progress].ans_idx === 2 ) {
          a.checked = false;
          b.checked = false;
          c.checked = false;
          document.getElementById("disp").innerHTML = "";
          this.progress++;
          if (this.progress == this.quizzes.length) {
            this.router.navigate(['teachResultPre', this.unique_id, this.site_id]);
          }
    }
    else if (a.checked || b.checked || c.checked) {
      document.getElementById("disp").innerHTML = "<mark style='color: red'>Your answer is incorrect, try it again.</mark><br><br>Explanation:<br>" + this.quizzes[this.progress].ans_exp;
    }
    else {
      document.getElementById("disp").innerHTML = "Please select one option from above before you submit";
    }
    this.progressBarWidth = (this.progress + 1) / this.quizzes.length * 100;
  }
}
