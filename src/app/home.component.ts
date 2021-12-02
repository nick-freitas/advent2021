import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  template: `
    <ul>
      <li >
      <a ></a>
      </li>
    </ul>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
