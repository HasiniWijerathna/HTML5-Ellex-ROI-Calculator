import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RoiAgePipe } from '../../pipes/roi-age-pipe';

@Component({
  templateUrl: 'build/pages/age-slider/age-slider.html',
  // tell our component it uses our AgePipe
  pipes: [RoiAgePipe]
})

export class AgeSliderPageComponent {
  constructor(private nav: NavController) { }

  sliderValue: number = 20;

  public people: Array<any> = [{
    name: 'Justin',
    age: 21
  }, {
      name: 'Waters ',
      age: 23
    }, {
      name: 'John ',
      age: 37
    }, {
      name: 'Betty ',
      age: 94
    }, {
      name: 'Roger ',
      age: 72
    }, {
      name: 'Larry ',
      age: 42
    }];
}
