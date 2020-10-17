import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterModel } from '../../models/filter.model';

@Component({
  selector: 'app-filter-body',
  templateUrl: './filter-body.component.html',
  styleUrls: ['./filter-body.component.scss']
})
export class FilterBodyComponent implements OnInit {
  countryList: string[] = [
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
  ];

  myFilters: FilterModel[] = [
    {
      header: "Funding program",
      settigns:["Horizon","Eureka","Life","Eurosters","HERCULE III","Creative Europe","Erosmas+"]
    },
    {
      header: "Type of action",
      settigns:["RIA","IA","CSA"]
    },
    {
      header: "Type of Entity",
      settigns:["Public","Private","Academia","Research institution","Enterprise","Startup/SME","Non-profit","Other"]
    },
    {
      header: "Type of Funding",
      settigns:["Grant","Tender","Load"]
    },
    {
      header: "Funding Percentage",
      settigns:["50%","70%","100%"]
    },
    {
      header: "Min. TRL",
      settigns:["TRL 1-4","TRL 5-7","TRL 8-9","TRL 1","TRL 4","TRL 7","TRL 2","TRL 5","TRL 8","TRL 3", "TRL 6","TRL 9"]
    }
  ]

  constructor (private sanitizer:DomSanitizer,private iconRegistry:MatIconRegistry) {
    this.loadIcon("funnel");
  }

  loadIcon(icon: string) {
    this.iconRegistry.addSvgIcon(
      icon,
      this.sanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/${icon}.svg`)
    );
  }

  ngOnInit(): void {
  }
}
