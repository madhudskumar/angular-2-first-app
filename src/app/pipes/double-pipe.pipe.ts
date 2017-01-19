import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doublePipe'
})
export class DoublePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
