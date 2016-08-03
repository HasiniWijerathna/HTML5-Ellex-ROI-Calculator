import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { Constants } from '../../constants';

/*
  Generated class for the ReimbursementPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/reimbursement/reimbursement.html',
})
export class ReimbursementPageComponent {
  private nav: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  private regions = Constants.REGIONS;

  constructor(nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();
  }

  private onChange(): void {
    let currentRegion = this.roiData.region;
  }


}
