import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-filter-body',
  templateUrl: './filter-body.component.html',
  styleUrls: ['./filter-body.component.scss']
})
export class FilterBodyComponent implements OnInit {
  countryList: string[]=[
    "All",
"Austria",
"Belgium",
"Bulgaria",
"Croatia",
"Republic of Cyprus",
"Czech Republic",
"Denmark",
"Estonia",
"Finland",
"France",
"Germany",
"Greece",
"Hungary",
"Ireland",
"Italy",
"Latvia",
"Lithuania",
"Luxembourg",
"Malta",
"Netherlands",
"Poland",
"Portugal",
"Romania",
"Slovakia",
"Slovenia",
"Spain",
"Sweden",
"Iceland",
"Norway",
"Albania",
"Bosnia and Herzegovina",
"North Macedonia",
"Montenegro",
"Serbia",
"Turkey",
"Israel",
"Moldova",
"Switzerland",
"Faroe Islands",
"Ukraine",
"Tunisia",
"Georgia",
"Armenia",
"Other"
  ]
  constructor () {

   }

  ngOnInit(): void {
  }
}
