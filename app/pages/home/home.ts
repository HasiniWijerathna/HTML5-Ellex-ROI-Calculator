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
  private procedures = Constants.PROCEDURES;

  constructor(navController: NavController, dataService: DataService) {
    this.navController = navController;
    this.dataService = dataService;

    this.roiData = dataService.getROIData();
  }

  private onChange(): void {
    let currentProduct = this.roiData.product;
    let proceduresOfProduct = this.fetchProceduresOfProduct(currentProduct);

    this.roiData.procedures = proceduresOfProduct;
  }

  private fetchProceduresOfProduct(product): any[] {
    let result = [];

    if (product && product.procedures && product.procedures.length) {
      product.procedures.forEach((procedureId) => {
        for (let index = 0; index < Constants.PROCEDURES.length; length++) {
          if (procedureId === Constants.PROCEDURES[index].id) {
            // Found the procedure of ID
            result.push(Constants.PROCEDURES[index]);
            break;
          }

          index++;
        }
      });
    }

    return result;
  }

}
