import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule } from '@angular/forms';
import { UsernameComponent } from './username/username.component';
import { DirectivesComponent } from './directives/directives.component';
import { GameComponent } from './game/game.component';
import { GameControlComponent } from './game/game-control/game-control.component';
import { OddComponent } from './game/odd/odd.component';
import { EvenComponent } from './game/even/even.component';
import { DirectivesDeepComponent } from './directives-deep/directives-deep.component';
import { HighlightDirective } from './directives-deep/highlight/highlight.directive';
import { CommonModule } from '@angular/common';
import { Highlight2Directive } from './directives-deep/highlight/highlight2.directive';
import { UnlessDirective } from './directives-deep/highlight/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { AcctComponent } from './acct/acct.component';
import { AccountComponent } from './acct/account/account.component';
import { NewAccountComponent } from './acct/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    SampleComponent,
    UsernameComponent,
    DirectivesComponent,
    GameComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectivesDeepComponent,
    HeaderComponent,
    
    HighlightDirective,
    Highlight2Directive,
    UnlessDirective,
    DropdownDirective,
    AcctComponent,
    AccountComponent,
    NewAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule //Enables Two-Way-Binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
