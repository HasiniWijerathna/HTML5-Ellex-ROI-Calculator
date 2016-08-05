import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { Constants } from '../../constants';
import { RevenueSnapshotPageComponent } from '../revenue-snapshot/revenue-snapshot';
import { HomePageComponent } from '../home/home';

@Component({
  templateUrl: 'build/pages/reimbursement/reimbursement.html',
})
export class ReimbursementPageComponent {
  private nav: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  private regions = Constants.REGIONS;
  private options = Constants.OPTIONS;

  constructor(nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();
  }

  private onChange(): void {
    this.arrangeProcedureData(this.roiData.procedures, this.options, this.roiData.region.id);
  }

  private next(): void {
    this.nav.push(RevenueSnapshotPageComponent);
  }

  private arrangeProcedureData(procedures, options, region): void {
    if (procedures && procedures.length) {
      procedures.forEach((procedure) => {
        let optionsOfProcedure = procedure.value[region].options;
        let optionObjects = [];

        optionsOfProcedure.forEach((optionId) => {
          let option = options[optionId];
          optionObjects.push(option);

          // options -> {1: foo, 2: bar, 3: foo, index: as}
          // options[2] = options.2 -> foo
          //
          // let index = 2;
          // options[index] = options[2] -> bar
        });
        procedure.options = optionObjects;
      });
    }
  }

  add() {
    let region = this.roiData.region;
    let procedures = this.roiData.procedures;

    procedures.forEach((procedure) => {
      let numberOfPatients = procedure.numberOfPatients;
      let option = procedure.option;
      // let value = procedure.value.1.1
      // let value = procedure.value[1][1]
      let value = procedure.value[region.id][option.id];
      let fee = procedure.fees;

      let weeklyResult = this.roiData.calculateResult(numberOfPatients, fee, value, ROIData.RESULT_WEEKLY);
      let monthlyResult = this.roiData.calculateResult(numberOfPatients, fee, value, ROIData.RESULT_MONTHLY);
      let annualResult = this.roiData.calculateResult(numberOfPatients, fee, value, ROIData.RESULT_ANNUALY);

      procedure.weeklyResult = weeklyResult;
      procedure.monthlyResult = monthlyResult;
      procedure.annualResult = annualResult;
    });

    this.dataService.setROIData(this.roiData);
    this.nav.push(RevenueSnapshotPageComponent);
  }
}
