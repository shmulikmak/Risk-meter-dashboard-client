import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpaceCapitalLetter'
})
export class AddSpaceCapitalLetterPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([A-Z])/g, ' $1').trim();
  }

}
