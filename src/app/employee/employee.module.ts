import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeOnboardingComponent } from './employee-onboarding/employee-onboarding.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeOnboardingComponent,
  ]
})
export class EmployeeModule { }
