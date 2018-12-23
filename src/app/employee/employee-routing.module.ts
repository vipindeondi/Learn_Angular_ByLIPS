import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { AuthGuard } from '../Guards/auth.guard';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { EmployeeGuard } from './Service/employee.guard';

const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee/new', component: EmployeeOnboardingComponent,
    canDeactivate: [EmployeeGuard], canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
