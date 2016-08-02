import { Component, Input } from '@angular/core';

@Component({
  selector: 'roi-header',
  templateUrl: 'build/components/roi-header/roi-header.html'
})
export class ROIHeaderComponent {
  @Input() title;

  constructor() {

  }
}
