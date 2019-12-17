import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  now = new Date();
  timediff = new Date().getTime() - 1576462457252;
  timediffStr: string ='';
  constructor() { }

  ngOnInit() {
  }

  calculateTimeDiff() {
    let timediff: number = Math.round(this.timediff / 1000);
    let second: number = Math.round(timediff % 60);
    timediff = Math.round(timediff / 60);
    let minute: number = Math.round(timediff % 60);
    timediff = Math.round(timediff / 60);
    let hour: number = Math.round(timediff % 60);
    this.timediffStr = hour + ' hours ' + minute + ' minutes ' + second + ' seconds ';
  }
}
