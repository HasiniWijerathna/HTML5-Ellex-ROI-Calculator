import { Injectable} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the AgePipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'RoiAgePipe'
})
@Injectable()
// export class AgePipe {
//   /*
//     Takes a value and makes it lowercase.
//    */
//   transform(value: string, args: any[]) {
//     value = value + ''; // make sure it's a string
//     return value.toLowerCase();
//   }
//   }

export class RoiAgePipe implements PipeTransform {

  transform(value, args?) {
    let minAge = args;

    // let resultt = [];
    // value.forEach(person => {
    //     if (person.age >= +minAge) {
    //       resultt.push(person);
    //     }
    // });

    let result = value.filter(person => {
      return person.age >= +minAge;
    });

    return result;
  }
  //   transform(input, args?) {
  //     let [minAge, maxAge] = args;
  //     return input.filter(person => {
  //       return person.age >= +minAge && person.age <= +maxAge;
  //     });
  //   }
  // }

}
