import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { PhysicianInformationPageComponent }from '../physician-information/physician-information';

@Component({
  templateUrl: 'build/pages/roi-calculaion/roi-calculaion.html',
})
export class RoiCalculaionPageComponent {

  private navController: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  constructor(navController: NavController, dataService: DataService) {
    this.navController = navController;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();
  }

  public next() {
    this.navController.push(PhysicianInformationPageComponent);
  }
}
