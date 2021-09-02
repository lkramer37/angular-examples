import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',        // <---- Used as <app-servers></app-servers> in html
  // selector: '[app-servers]',   // <---- Used as <div app-servers></div> in html
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  //String Interpolation Example
  serverId: number = 10;
  serverStatus: string = 'offline'

  allowNewServer = false; //Property Binding Example
  serverCreationStatus = 'No server was created!';  // Event Binding Example
  serverName = ''; // 2way Event Binding
  serverCreated = false; //Directives
  servers = ['TestServer', 'SampleServer', 'ThirdServer']; //ngFor

  constructor() { 
    //Property Binding Example
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void { }

  getColor() {
    return this.serverCreated ? 'green' : 'yellow';
  }

  getServerStatus() { //String Interpolation Example
    return this.serverStatus;
  }

  onCreateServer() { // Event Binding Example
    this.serverCreated = true;
    this.servers.push(this.serverName); //ngFor
    this.serverCreationStatus = 'Server was created!';
  }

  onCreateServer2() {
    this.serverCreationStatus = 'Server name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){ //2Way Event Binding
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
