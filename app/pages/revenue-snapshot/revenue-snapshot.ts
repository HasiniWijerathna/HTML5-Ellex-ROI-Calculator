import { Component, ElementRef, AfterViewChecked } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../providers/data-service/data-service';
import { FinancialSnapshotPageComponent }from '../financial-snapshot/financial-snapshot';
import { ROIData } from '../../models/roi-data/roi-data';

// Declare MacsJS interface
declare let macs: any;

@Component({
  templateUrl: 'build/pages/revenue-snapshot/revenue-snapshot.html',
})
export class RevenueSnapshotPageComponent implements AfterViewChecked {
  private elementRef: ElementRef;
  private navController: NavController;
  // private nav: NavController;
  // private dataService: DataService;
  private roiData: ROIData;

  private assetHTML: string = null;

  constructor(elementRef: ElementRef, nav: NavController, dataService: DataService) {
    this.roiData = dataService.getROIData();
    this.elementRef = elementRef;
    this.navController = nav;
  }

  // Lifecycle hook (gets executed after the view has been rendered or re-rendered)
  ngAfterViewChecked() {
    if (!this.assetHTML) {
      try {
        this.assetHTML = this.elementRef.nativeElement.children[1].firstElementChild.firstElementChild.innerHTML;
      } catch (error) {
        // Just ignore the error.
      }
    }
  }

  public createPDF(): void {
    let pageContent = encodeURI(this.assetHTML);
    let htmlObject = {
      'pageContent': pageContent
    };
    macs.convertHTMLToPDF(htmlObject, (result) => {
      alert('Created');
    }, (error) => {
      alert('Error');
    });
  }

  public next(): void {
    this.navController.push(FinancialSnapshotPageComponent);
  }
}
