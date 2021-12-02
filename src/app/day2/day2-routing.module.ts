import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day2Component } from './day2.component';

const routes: Routes = [{ path: '', component: Day2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Day2RoutingModule { }
