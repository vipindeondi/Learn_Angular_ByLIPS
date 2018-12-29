import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {

  transform(value: any,salary: number): any {
    return value.filter((data)=>
    data.salary > salary);
  }

}
