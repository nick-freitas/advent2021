import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul ngbNav #nav="ngbNav" class="nav-tabs">
      <li ngbNavItem *ngFor="let day of days">
        <a ngbNavLink [routerLink]="['/day'+day]">Day {{day}}</a>
        
      </li>
      
    </ul>
    

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  days = [1, 2]
  title = 'advent2021';
}
