import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { PaymentComponent } from './components/payment/payment.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RoleBasedLoginComponent } from './role-based-login/role-based-login.component';


const routes: Routes = [
   { path: 'register', component: StudentRegistrationComponent },
  {path : '', component: WelcomePageComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'payment', component: PaymentComponent},
  {
path:'login',
component:RoleBasedLoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
