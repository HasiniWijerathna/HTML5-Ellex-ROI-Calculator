import { Component } from '@angular/core';
import { NavController, Platform, ActionSheet } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
/*
  Generated class for the RevenueSnapshotPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/revenue-snapshot/revenue-snapshot.html',
})
export class RevenueSnapshotPageComponent {
  private nav: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  constructor(nav: NavController, dataService: DataService) {
    this.roiData = dataService.getROIData();
    console.log(this.roiData);

  }

}
