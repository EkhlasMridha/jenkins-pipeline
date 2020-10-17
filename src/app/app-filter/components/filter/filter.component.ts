import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  tagList: string[] = ["Covid19", "SDG's", "Digital Healthcare", "Cyber Security", "Food Tech", "Solar Energy", "Agriculture", "Wildfire", "Bio Fuel", "Drone", "Waste Management"];
  constructor() { }

  ngOnInit(): void {
  }

}
