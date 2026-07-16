import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './components/student-registration/student-registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const routes: Routes = [
  { path: '', component: StudentRegistrationComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'trainers', component: TrainersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
