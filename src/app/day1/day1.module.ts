import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day1RoutingModule } from './day1-routing.module';
import { Day1Component } from './day1.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    Day1Component
  ],
  imports: [
    CommonModule,
    Day1RoutingModule,
    NgbModule
  ]
})
export class Day1Module { }
