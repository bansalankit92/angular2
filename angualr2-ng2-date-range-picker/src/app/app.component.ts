import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {DateRangePickDirective} from './date-range-pick.directive';
import { DateRange } from './date-range';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dateRange:DateRange=new DateRange({});
  pickerOptions: Object = {
    'showDropdowns': true,
    'showWeekNumbers': true,
    'timePickerIncrement': 5,
    'autoApply': true
  };

  constructor() {}

  dateSelected(dateRange:DateRange) {
    this.dateRange=dateRange;
  }

}

