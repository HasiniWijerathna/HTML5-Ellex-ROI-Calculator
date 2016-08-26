import { Component } from '@angular/core';
import { Control, ControlGroup } from '@angular/common';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { ROIHeaderComponent } from '../../components/roi-header/roi-header';
import { Constants } from '../../constants';
import { ReimbursementPageComponent } from '../reimbursement/reimbursement';
import { emailAddressValidator, passwordValidator, isIntegerValidator } from '../../validators/custom-validators';
import {AgeSliderPageComponent }from '../age-slider/age-slider';


@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [ROIHeaderComponent]
})
export class HomePageComponent {
  private navController: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  public products = Constants.PRODUCTS;
  private procedures = this.arrangeProcedureData(Constants.PROCEDURES);

  private facilityForm: ControlGroup;

  constructor(navController: NavController, dataService: DataService) {
    this.navController = navController;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();

    this.facilityForm = new ControlGroup({
      email: new Control('email', emailAddressValidator),
      integer: new Control('integer', isIntegerValidator),
      password: new Control('password', passwordValidator)
    });
  }

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() {
    this.toggle = !this.toggle;
  }

  public onChange(): void {

    let currentProduct = this.roiData.product;
    let proceduresOfProduct = this.fetchProceduresOfProduct(currentProduct, this.procedures);

    this.roiData.procedures = proceduresOfProduct;
  }

  private fetchProceduresOfProduct(product, procedures): any[] {
    let result = [];

    if (product && product.procedures && product.procedures.length) {
      product.procedures.forEach((procedureId) => {
        result.push(procedures[procedureId]);
      });
    }

    return result;
  }

  private arrangeProcedureData(procedures): any {
    let result = {};

    if (procedures && procedures.length) {
      procedures.forEach((procedure) => {
        result[procedure.id] = procedure;
      });
    }

    return result;
  }

  public next(): void {
    this.dataService.setROIData(this.roiData);
    this.navController.push(ReimbursementPageComponent);
  }

  public navigate() {
    this.navController.push(AgeSliderPageComponent);
  }

}
