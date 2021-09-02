import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/services/accounts.service';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-acct',
  templateUrl: './acct.component.html',
  styleUrls: ['./acct.component.scss'],
  providers: [LoggingService, AccountsService]
})
export class AcctComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
    // this.accountsService.addAccount(newAccount.name, newAccount.status);
    
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // this.accountsService.updateStatus(updateInfo.id, updateInfo.newStatus);
  }
}



  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];
