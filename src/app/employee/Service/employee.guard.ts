import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable, from } from 'rxjs';
import { EmployeeOnboardingComponent } from '../employee-onboarding/employee-onboarding.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanDeactivate<EmployeeOnboardingComponent> {
  
  canDeactivate(component: EmployeeOnboardingComponent, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot,
     nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
       return component.onboardingForm.valid;
     }
}
