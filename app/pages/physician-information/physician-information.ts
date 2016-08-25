import { Component } from '@angular/core';
import { Control, ControlGroup } from '@angular/common';
import { NavController } from 'ionic-angular';

import { emailAddressValidator, passwordValidator, isIntegerValidator } from '../../validators/custom-validators';


@Component({
  templateUrl: 'build/pages/physician-information/physician-information.html',
})
export class PhysicianInformationPageComponent {

  private facilityForm: ControlGroup;
  constructor(navController: NavController) {

    this.facilityForm = new ControlGroup({
      email: new Control('email', emailAddressValidator),
      integer: new Control('integer', isIntegerValidator),
      password: new Control('password', passwordValidator)
    });
  }
}
