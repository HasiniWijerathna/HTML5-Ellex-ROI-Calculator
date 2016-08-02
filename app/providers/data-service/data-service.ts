import { Injectable } from '@angular/core';

import { ROIData } from '../../models/roi-data/roi-data';

@Injectable()
export class DataService {
  roiData: ROIData;

  constructor() {
    this.roiData = null;
  }

}
