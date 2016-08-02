import { Injectable } from '@angular/core';

import { ROIData } from '../../models/roi-data/roi-data';

@Injectable()
export class DataService {
  roiData: ROIData;

  constructor() {
    this.initEmptyROIData();
  }

  // Creates an empty ROI data object in the memory.
  private initEmptyROIData(): void {
    let roiData = new ROIData();
    this.roiData = roiData;
  }

  /**
   * Returns the current ROI Data in the memory.
   * @return {ROIData} Current ROI data.
   */
  public getROIData(): ROIData {
    return this.roiData;
  }

  /**
   * Saves the given ROI data object in the memory.
   * @param {ROIData} roiData The ROI data to be saved.
   */
  public setROIData(roiData: ROIData): void {
    this.roiData = roiData;
  }

}
