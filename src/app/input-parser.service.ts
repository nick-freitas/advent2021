import { Injectable } from '@angular/core';
import { InputService } from './input.service';

@Injectable({
  providedIn: 'root'
})
export class InputParserService {

  constructor(private input: InputService) { }

  async loadTest(day: number): Promise<any> {
    const input = await this.input.loadTest(day);
    return this.parse(day, input);
  }

  async loadInput(day: number): Promise<any> {
    const input = await this.input.loadInput(day);
    return this.parse(day, input);
  }

  private parse(day: number, input: string): any {
    switch (day) {
      case 1:
        return input.split('\n').map((x: string) => parseInt(x));
      case 2:
        return input.split('\n').map(line => {
          const [dir, _mag] = line.split(' ')
          let mag = parseInt(_mag)
          return { dir, mag }
        })
      default:
        return input;
    }
  }
}
