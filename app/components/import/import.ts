import { Directive } from '@angular/core';

/*
  Generated class for the Import directive.

  See https://angular.io/docs/ts/latest/api/core/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[import]' // Attribute selector
})
export class Import {
  constructor() {
    console.log('Hello World');
  }
}
