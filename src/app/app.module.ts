import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { RoleBasedLoginComponent } from './role-based-login/role-based-login.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    StudentRegistrationComponent,
    TrainersComponent,
    PaymentComponent,
    WelcomePageComponent,
    RoleBasedLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
