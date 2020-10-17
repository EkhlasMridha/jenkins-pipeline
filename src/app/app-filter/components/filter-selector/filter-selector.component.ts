import { Component, Input, OnInit } from '@angular/core';
import { FilterModel } from '../../models/filter.model';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.scss']
})
export class FilterSelectorComponent implements OnInit {
  @Input() filterList: FilterModel;
  list: string[];
  hasMore: boolean;
  constructor () { 
   
  }

  ngOnInit(): void {
    this.list = this.checkValue(this.filterList.settigns);
  }

  checkValue(value: string[]) {
    if (value.length > 3) {
      let newValue = value.slice(0, 3);
      this.hasMore = true;
      return newValue;
    }

    return value;
  }

  showMore() {
    this.list = this.filterList.settigns;
    this.hasMore = false;
  }
}
