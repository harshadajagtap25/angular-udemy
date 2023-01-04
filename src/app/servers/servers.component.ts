import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server!';
  serverName = 'Testing purpose';
  servername2 = '';
  serverCreated2 = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = 'Server created! Name is ' + this.serverName;
  }

  onUpdate(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onSecondServerCreated() {
    this.serverCreated2 = true;
  }
}
