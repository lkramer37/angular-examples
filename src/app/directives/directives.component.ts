import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  buttonBool: boolean = false;
  clickLog : number[] = [];
  counter = 0;

  constructor() { }

  ngOnInit(): void {}

  onDisplayDetails(){
    this.buttonBool = !this.buttonBool;
    this.clickLog.push(this.counter++);
  }
}