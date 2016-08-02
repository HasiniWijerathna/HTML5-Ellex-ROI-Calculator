import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { ROIData } from '../../models/roi-data/roi-data';
import { ROIHeaderComponent } from '../../components/roi-header/roi-header';
import { Constants } from '../../constants';

@Component({
  templateUrl: 'build/pages/home/home.html',
  directives: [ROIHeaderComponent]
})
export class HomePageComponent {
  private navController: NavController;
  private dataService: DataService;
  private roiData: ROIData;

  private products = Constants.PRODUCTS;

  constructor(navController: NavController, dataService: DataService) {
    this.navController = navController;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();
  }

}
