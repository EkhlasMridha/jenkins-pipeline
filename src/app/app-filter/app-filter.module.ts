import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FilterBodyComponent } from './components/filter-body/filter-body.component';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { FilterSelectorComponent } from './components/filter-selector/filter-selector.component';
import {MatCheckboxModule} from "@angular/material/checkbox"

@NgModule({
  declarations: [FilterComponent, FilterBodyComponent, FilterSelectorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  exports:[FilterComponent]
})
export class AppFilterModule { }
