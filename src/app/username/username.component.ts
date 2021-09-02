import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  username = '';

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
