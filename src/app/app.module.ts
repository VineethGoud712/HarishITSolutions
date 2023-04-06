import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ApiService } from './api.service';
import{  HttpClientModule} from '@angular/common/http'
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplyComponent } from './apply/apply.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MaterialModule } from './material/material.module';
// import { PrimengModule } from './primeng/primeng.module';
import { RejectListComponent } from './reject-list/reject-list.component';
import { ShortListComponent } from './short-list/short-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { AppiledUsersComponent } from './appiled-users/appiled-users.component';
import { TotalUsersComponent } from './total-users/total-users.component';
import { AddJobComponent } from './add-job/add-job.component';
import { UsersService } from './users.service';
import { GraphDashboardComponent } from './graph-dashboard/graph-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    TopHeaderComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    UsersComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    ApplyComponent,
    UserDashboardComponent,
    AdminDashBoardComponent,
    RejectListComponent,
    ShortListComponent,
    ContactListComponent,
    AppiledUsersComponent,
    TotalUsersComponent,
    AddJobComponent,
    GraphDashboardComponent,
   
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    FormsModule,
    // PrimengModule,
    ReactiveFormsModule,
    HttpClientModule, 
   NgxUiLoaderModule,
     NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
     BrowserAnimationsModule, 
     ToastrModule.forRoot(),
     ButtonModule,
     TableModule,
     NgbModule,
     MaterialModule
     //MatAutocompleteModule, MatCheckboxModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule, MatRadioModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatSlideToggleModule 
  
  ],
  providers: [ApiService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
