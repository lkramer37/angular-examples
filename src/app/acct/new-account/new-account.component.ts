import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { LoggingService } from 'src/app/shared/services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent  {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
  });
    this.loggingService.logStatusChange(accountStatus);
  }

}
