import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { ApplyComponent } from './apply/apply.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
   path:'',
   component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  },
{
  path:'users',
  component:UsersComponent
},
{
  path:'contactus',
  component:ContactUsComponent
}
,
{
  path:'apply',
  component:ApplyComponent
}
,
{
  path:'userDashboard',
  component:UserDashboardComponent
},
{
  path:'adminDashboard',
  component:AdminDashBoardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
