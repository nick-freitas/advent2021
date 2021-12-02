import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Day2RoutingModule } from './day2-routing.module';
import { Day2Component } from './day2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    Day2Component
  ],
  imports: [
    CommonModule,
    Day2RoutingModule,
    NgbModule
  ]
})
export class Day2Module { }
