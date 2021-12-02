import { Component, OnInit } from '@angular/core';
import { BaseDayComponent } from '../day.component';
import { InputParserService } from '../input-parser.service';

@Component({
  selector: 'app-day2',
  templateUrl: '../day.component.html',
  styles: [
  ]
})
export class Day2Component extends BaseDayComponent implements OnInit {
  constructor(public override inputParser: InputParserService) {
    super(2, inputParser);
  }

  partOne() {
    let hor = 0
    let ver = 0

    this.input.forEach(command => {
      let hor_mod = 1
      let ver_mod = 1

      switch (command.dir) {
        // @ts-ignore
        case 'backward':
          hor_mod = -1
        //fallthrough
        case 'forward':
          hor += command.mag * hor_mod
          break;
        // @ts-ignore
        case 'up':
          ver_mod = -1
        //fallthrough
        case 'down':
          ver += command.mag * ver_mod
          break;
      }
    })

    this.answer1 = [hor, ver, hor * ver]
  }

  partTwo() {
    let hor = 0
    let ver = 0
    let aim = 0

    this.input.forEach(command => {
      let aim_mod = 1

      switch (command.dir) {
        case 'forward':
          hor += command.mag
          ver += command.mag * aim
          break;
        // @ts-ignore
        case 'up':
          aim_mod = -1
        //fallthrough
        case 'down':
          aim += command.mag * aim_mod
          break;
      }
    })

    this.answer2 = [hor, ver, aim, hor * ver]
  }
}
