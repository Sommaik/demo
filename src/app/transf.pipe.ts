import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transf'
})
export class TransfPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return "*"+value+"*";
  }

}
