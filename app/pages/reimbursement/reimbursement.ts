import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { Constants } from '../../constants';
import { RevenueSnapshotPageComponent } from '../revenue-snapshot/revenue-snapshot';


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
    // let currentRegion = this.roiData.region;
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

    console.log(procedures);

  }



}
