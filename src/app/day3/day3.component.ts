import { Component, OnInit } from '@angular/core';
import { BaseDayComponent } from '../day.component';
import { InputParserService } from '../input-parser.service';

@Component({
  selector: 'app-day3',
  templateUrl: '../day.component.html',
  styles: [
  ]
})
export class Day3Component extends BaseDayComponent implements OnInit {
  constructor(public override inputParser: InputParserService) {
    super(3, inputParser);
  }

  partOne(): void {
    const numOfBits = this.input[0].length;
    this.answer1 = [numOfBits, this.input[0]]

    const bits: any = [];
    for (let com of this.input) {
      for (let i = 0; i < numOfBits; i++) {
        bits[i] = bits[i] || [0, 0]

        bits[i][com.charAt(i)]++
        // console.log(`|${com.toString()}|`, i, com.charAt(i), JSON.stringify(bits))
      }
    }

    const msb = bits.map((b: any) => b[0] > b[1] ? 0 : 1).join('')
    const lsb = bits.map((b: any) => b[0] > b[1] ? 1 : 0).join('')

    this.answer1 = [
      parseInt(msb, 2),
      parseInt(lsb, 2),
      parseInt(msb, 2) * parseInt(lsb, 2)
    ]
  }

  partTwo(): void {
    const numOfBits = this.input[0].length;
    this.answer2 = [numOfBits, this.input[0]]

    const msByte = this.p2helper(1)
    const lsByte = this.p2helper(0)


    this.answer2 = [
      parseInt(msByte, 2),
      parseInt(lsByte, 2),
      parseInt(msByte, 2) * parseInt(lsByte, 2)
    ]
  }

  p2helper(vtk: number): any {
    let bitNumber = 0
    let sByte = this.input
    while (bitNumber < this.input[0].length && sByte.length > 1) {
      // console.log('pre', bitNumber, msb_bytes)
      let bits: any = [0, 0];

      for (let com of sByte) {
        bits[com.charAt(bitNumber)]++
      }
      // console.log(com.charAt(bitNumber), bits)

      let msb = bits[0] > bits[1] ? !vtk : vtk
      if (bits[0] === bits[1]) msb = vtk

      const new_msb_bytes = sByte.filter((byte: any) => byte.charAt(bitNumber) == msb)
      sByte = new_msb_bytes

      // console.log('post', bitNumber, msb, msb_bytes, bits)
      bitNumber++
    }

    return sByte[0]
  }
}


