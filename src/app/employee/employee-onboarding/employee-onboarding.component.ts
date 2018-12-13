import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { CustomValidator } from '../../custom/Validators/customvalidator';
import { from } from 'rxjs';

@Component({
  selector: 'app-employee-onboarding',
  templateUrl: './employee-onboarding.component.html',
  styleUrls: ['./employee-onboarding.component.css']
})
export class EmployeeOnboardingComponent implements OnInit {

  onboardingForm: FormGroup;  //use this varriable for hold varribles.
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.onboardingForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      dob: new FormControl(''),
      address: this.fb.group({
        addressLine1: new FormControl(''),
        addressLine2: new FormControl(''),
        city: new FormControl(''),
        pin: new FormControl('', [Validators.required, CustomValidator.validatePin])
      }),
      experience: this.fb.array([
        this.buildForm()
      ])
    }
    );
  }
  buildForm() {
    return this.fb.group({
      employer: new FormControl('',[Validators.required]),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      position: new FormControl('')
    });
  }

  addEmployer() {
    const experience = this.onboardingForm.controls['experience'] as FormArray;
    experience.push(this.buildForm());
  }
  removeEmployer(i: number) {
    const experience = this.onboardingForm.controls['experience'] as FormArray;
    experience.removeAt(i);

  }
}
