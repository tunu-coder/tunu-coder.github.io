import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { MinComponent } from './layouts/min.component';
import { DashboardLayoutComponent } from './layouts/dashboardlayout.component';
import { HeaderComponent } from './layouts/parts/header.component';
import { SidebarComponent } from './layouts/parts/sidebar.component';
import {
  SidebaritemComponent,
  SidebaritemInnerComponent,
} from './layouts/parts/sidebaritem.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ToastrModule } from 'ngx-toastr';
import { HttpCallsInterceptor } from './shared/interceptors/http-calls.interceptor';
import { ApproveStudentComponent } from './pages/students/approve-student/approve-student.component';
import { BulkApprovalComponent } from './pages/students/bulk-approval/bulk-approval.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MinComponent,
    DashboardLayoutComponent,
    SidebaritemComponent,
    SidebaritemInnerComponent,
    BlankPageComponent,
    DashboardComponent,
    LoginComponent,
    ErrorComponent,
    UserProfileComponent,
    ApproveStudentComponent,
    BulkApprovalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressbarModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCallsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
