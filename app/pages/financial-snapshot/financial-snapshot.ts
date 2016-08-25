import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { RoiCalculaionPageComponent } from '../roi-calculaion/roi-calculaion';

@Component({
  templateUrl: 'build/pages/financial-snapshot/financial-snapshot.html',
})
export class FinancialSnapshotPageComponent {
  private navController: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  public purchaseMethods: Array<any> = [{
    type: 'Lease'
  },
    {
      type: 'Cash'
    }];

  constructor(navController: NavController, dataService: DataService) {
    this.navController = navController;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();
  }

  public clearFinancial() {
    this.roiData.unitPrice = '';
    this.roiData.warrantyCost = '';
    this.roiData.totalPurchasingPrice = '';
    this.roiData.downPayment = '';
    this.roiData.purchaseMethod = [];
    this.roiData.leasingAmount = '';
    this.roiData.interestRate = '';
    this.roiData.leasePeriod = '';
    this.roiData.leaseFactorResidual = '';
    this.roiData.residual = '';
    this.roiData.monthlyPay = '';
    this.onValuesChange();
  }
  public onValuesChange() {

    if (this.roiData.unitPrice && this.roiData.warrantyCost) {
      let totalPurchasingPrice = this.roiData.calculateTotalPrice(this.roiData.unitPrice, this.roiData.warrantyCost);
      this.roiData.totalPurchasingPrice = totalPurchasingPrice;
      // console.log('total ' + this.roiData.totalPurchasingPrice);
      // console.log(this.roiData.downPayment);
    }

    let leasingAmount = this.roiData.calculateLeasingAmount(this.roiData.totalPurchasingPrice, this.roiData.downPayment);
    this.roiData.leasingAmount = leasingAmount;

    let residual = this.roiData.calculateResidual(this.roiData.leasingAmount, this.roiData.leaseFactorResidual);
    this.roiData.residual = residual;

    let monthlyPay = this.roiData.calculateMonthlyPay(this.roiData.interestRate, this.roiData.residual, this.roiData.leasingAmount, this.roiData.leasePeriod);
    this.roiData.monthlyPay = monthlyPay;

    this.roiData.getProcedureFees();
  }

  public next(): void {
    this.navController.push(RoiCalculaionPageComponent);
  }

}
