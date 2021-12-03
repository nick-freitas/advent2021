import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Day3RoutingModule } from './day3-routing.module';
import { Day3Component } from './day3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    Day3Component
  ],
  imports: [
    CommonModule,
    Day3RoutingModule,
    NgbModule
  ]
})
export class Day3Module { }
