import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UserNameComponent } from './user-name/user-name.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { BasicHighlightDirective } from './basic-directive/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeServiceService } from './services/employee-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserNameComponent,
    AssignmentComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
