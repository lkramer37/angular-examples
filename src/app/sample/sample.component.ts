import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  

  constructor() { 
    // console.log("Constructor() called");
  }


  ngOnInit(): void {
    // console.log("ngOnInit called");
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log("ngOnChanges called");
  }

  ngDoCheck(){
    // console.log("ngDoCheck called");
  }


  ngAfterContentInit(){
    // console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    // console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    // console.log("ngAfterViewInit called");
  }

  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked called");
  }

  ngOnDestroy(){
    // console.log("ngOnDestroy called");
  }

  onChangeFirst(){
    // this.element[0].name = 'Changed!';
  }

  onDestroyFirst(){

  }
}
