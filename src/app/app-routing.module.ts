import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'day1', loadChildren: () => import('./day1/day1.module').then(m => m.Day1Module) },
  { path: 'day2', loadChildren: () => import('./day2/day2.module').then(m => m.Day2Module) },
  { path: 'day3', loadChildren: () => import('./day3/day3.module').then(m => m.Day3Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
