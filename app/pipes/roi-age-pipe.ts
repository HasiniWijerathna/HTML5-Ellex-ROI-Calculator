import { Injectable} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'RoiAgePipe'
})
@Injectable()

export class RoiAgePipe implements PipeTransform {

  transform(value, args?) {
    let minAge = args;
    let result = value.filter(person => {
      return person.age >= +minAge;
    });

    return result;
  }
}
