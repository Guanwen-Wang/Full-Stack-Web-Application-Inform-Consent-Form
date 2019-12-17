import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomePreComponent } from './welcome-pre/welcome-pre.component';
import { HttpClientModule } from '@angular/common/http';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { ProjectComponent } from './project/project.component';
import { YourProjectComponent } from './your-project/your-project.component';
import { EduModuleComponent } from './edu-module/edu-module.component';
import { IcfModuleComponent } from './icf-module/icf-module.component';
import { IcfModulePreComponent } from './icf-module-pre/icf-module-pre.component';
import { TeachModulePreComponent } from './teach-module-pre/teach-module-pre.component';
import { TeachModuleComponent } from './teach-module/teach-module.component';
import { TeachResultComponent } from './teach-result/teach-result.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SummaryAfterConfirmComponent } from './summary-after-confirm/summary-after-confirm.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUserControlComponent } from './admin-user-control/admin-user-control.component';
import { AdminProjectControlComponent } from './admin-project-control/admin-project-control.component';
import { AdminQuizControlComponent } from './admin-quiz-control/admin-quiz-control.component';
import { AdminUserControlSingleComponent } from './admin-user-control-single/admin-user-control-single.component';
import { AdminProjectControlDetailsComponent } from './admin-project-control-details/admin-project-control-details.component';
import { AdminProjectControlDetailSingleComponent } from './admin-project-control-detail-single/admin-project-control-detail-single.component';
import { AdminProjectControlSingleComponent } from './admin-project-control-single/admin-project-control-single.component';
import { AdminQuizControlDetailsComponent } from './admin-quiz-control-details/admin-quiz-control-details.component';
import { AdminQuizControlDetailSingleComponent } from './admin-quiz-control-detail-single/admin-quiz-control-detail-single.component';
import { AdminUserControlProjectStatusComponent } from './admin-user-control-project-status/admin-user-control-project-status.component';
import { AdminUserControlProjectStatusSingleComponent } from './admin-user-control-project-status-single/admin-user-control-project-status-single.component';
import { TeachResultPreComponent } from './teach-result-pre/teach-result-pre.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, LoginComponent, ErrorComponent, ListProjectsComponent, MenuComponent, FooterComponent, LogoutComponent, WelcomePreComponent, ProjectComponent, YourProjectComponent, EduModuleComponent, IcfModuleComponent, IcfModulePreComponent, TeachModulePreComponent, TeachModuleComponent, TeachResultComponent, ConfirmationComponent, SummaryAfterConfirmComponent, AdminLoginComponent, AdminHomeComponent, AdminUserControlComponent, AdminProjectControlComponent, AdminQuizControlComponent, AdminUserControlSingleComponent, AdminProjectControlDetailsComponent, AdminProjectControlDetailSingleComponent, AdminProjectControlSingleComponent, AdminQuizControlDetailsComponent, AdminQuizControlDetailSingleComponent, AdminUserControlProjectStatusComponent, AdminUserControlProjectStatusSingleComponent, TeachResultPreComponent, DigitalClockComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, MDBBootstrapModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
