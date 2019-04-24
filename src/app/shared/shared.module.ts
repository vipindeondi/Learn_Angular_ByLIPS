import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SalaryPipe, HoverDirective } from '../custom';

// import { HoverDirective } from '../custom/directive/hover.directive';
import { ListModule } from 'projects/list/src/public_api';


@NgModule({
declarations:[SalaryPipe, HoverDirective,],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ListModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SalaryPipe,
    HoverDirective,
    ListModule
  ]

})
export class SharedModule { }
