import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomePreComponent } from './welcome-pre/welcome-pre.component';
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

const routes: Routes = [
  { path: '', component: WelcomePreComponent },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'adminHome/:unique_id', component: AdminHomeComponent, canActivate: [RouteGuardService] },
  { path: 'adminUserControl/:unique_id', component: AdminUserControlComponent, canActivate: [RouteGuardService]},
  { path: 'adminUserControlSingle/:unique_id/:id', component: AdminUserControlSingleComponent, canActivate: [RouteGuardService]},
  { path: 'adminUserControlProjectStatus/:unique_id/:uid', component: AdminUserControlProjectStatusComponent, canActivate: [RouteGuardService]},
  { path: 'adminUserControlProjectStatusSingle/:unique_id/:uid', component: AdminUserControlProjectStatusSingleComponent, canActivate: [RouteGuardService]},
  { path: 'adminProjectControl/:unique_id', component: AdminProjectControlComponent, canActivate: [RouteGuardService]},
  { path: 'adminProjectControlSingle/:unique_id/:id', component: AdminProjectControlSingleComponent, canActivate: [RouteGuardService]},
  { path: 'adminProjectControlDetails/:unique_id/:project_id', component: AdminProjectControlDetailsComponent, canActivate: [RouteGuardService]},
  { path: 'adminProjectControlDetailSingle/:unique_id/:project_id/:id', component: AdminProjectControlDetailSingleComponent, canActivate: [RouteGuardService]},
  { path: 'adminQuizControl/:unique_id', component: AdminQuizControlComponent, canActivate: [RouteGuardService]},
  { path: 'adminQuizControlDetails/:unique_id/:site_id', component: AdminQuizControlDetailsComponent, canActivate: [RouteGuardService]},
  { path: 'adminQuizControlDetailSingle/:unique_id/:site_id/:id', component: AdminQuizControlDetailSingleComponent, canActivate: [RouteGuardService]},
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:unique_id', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'projects', component: ListProjectsComponent, canActivate: [RouteGuardService] },
  { path: 'projects/:id', component: ProjectComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'confirmation/:unique_id/:site_id', component: ConfirmationComponent, canActivate: [RouteGuardService] },
  { path: 'summaryAfterConfirm/:unique_id/:site_id', component: SummaryAfterConfirmComponent, canActivate: [RouteGuardService] },
  { path: 'yourProject/:unique_id/:site_id', component: YourProjectComponent, canActivate: [RouteGuardService] },
  { path: 'eduModule/:unique_id/:site_id', component: EduModuleComponent, canActivate: [RouteGuardService]},
  { path: 'icfModulePre/:unique_id/:site_id', component: IcfModulePreComponent, canActivate: [RouteGuardService]},
  { path: 'icfModule/:unique_id/:site_id', component: IcfModuleComponent, canActivate: [RouteGuardService]},
  { path: 'teachModulePre/:unique_id/:site_id', component: TeachModulePreComponent, canActivate: [RouteGuardService]},
  { path: 'teachModule/:unique_id/:site_id', component: TeachModuleComponent, canActivate: [RouteGuardService]},
  { path: 'teachResult/:unique_id/:site_id', component: TeachResultComponent, canActivate: [RouteGuardService]},
  { path: 'teachResultPre/:unique_id/:site_id', component: TeachResultPreComponent, canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent } // always place last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
