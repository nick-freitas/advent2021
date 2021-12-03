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

  partOne() {
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

  partTwo() {
    const numOfBits = this.input[0].length;
    this.answer2 = [numOfBits, this.input[0]]

    const msb_bytes = this.p2helper(1)
    const lsb_bytes = this.p2helper(0)


    this.answer2 = [
      parseInt(msb_bytes, 2),
      parseInt(lsb_bytes, 2),
      parseInt(msb_bytes, 2) * parseInt(lsb_bytes, 2)
    ]
  }

  p2helper(vtk: number) {
    let bitNumber = 0
    let msb_bytes = this.input
    while (bitNumber < this.input[0].length && msb_bytes.length > 1) {
      // console.log('pre', bitNumber, msb_bytes)
      let bits: any = [0, 0];

      for (let com of msb_bytes) {
        bits[com.charAt(bitNumber)]++
        // console.log(com.charAt(bitNumber), bits)

        let msb = bits[0] > bits[1] ? !vtk : vtk
        if (bits[0] === bits[1]) msb = vtk

        const new_msb_bytes = msb_bytes.filter((byte: any) => byte.charAt(bitNumber) == msb)
        msb_bytes = new_msb_bytes

        // console.log('post', bitNumber, msb, msb_bytes, bits)
        bitNumber++
      }

      return msb_bytes[0]
    }
  }


