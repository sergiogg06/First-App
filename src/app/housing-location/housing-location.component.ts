import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      housing-location works!
    </p>
  `,
  styleUrls: [`./housing-location.component.ts`]
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

