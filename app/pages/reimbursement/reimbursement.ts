import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ReimbursementPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/reimbursement/reimbursement.html',
})
export class ReimbursementPageComponent {
  private nav: NavController

  constructor(nav: NavController) {
    this.nav = nav;
  }

}
