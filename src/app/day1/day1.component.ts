import { Component, OnInit } from '@angular/core';
import { BaseDayComponent } from '../day.component';
import { InputParserService } from '../input-parser.service';

@Component({
  selector: 'app-day1',
  templateUrl: '../day.component.html',
  styles: []
})
export class Day1Component extends BaseDayComponent implements OnInit {
  constructor(public override inputParser: InputParserService) {
    super(1, inputParser);
  }

  partOne() {
    let val = 0;

    for (let i = 1; i < this.input.length; i++) {
      if (this.input[i] > this.input[i - 1]) {
        val++
        console.log(`${val} ${this.input[i]}`)
      }
    }

    this.answer1 = val
  }

  partTwo() {
    let val = 0;

    for (let i = 3; i < this.input.length; i++) {
      const bsum = this.input[i] + this.input[i - 1] + this.input[i - 2]
      const asum = this.input[i - 1] + this.input[i - 2] + this.input[i - 3]

      if (bsum > asum) {
        val++
        console.log(`${val} ${this.input[i]}`)
      }
    }

    this.answer2 = val
  }
}
