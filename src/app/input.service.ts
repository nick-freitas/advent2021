import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor(private http: HttpClient) {
  }

  async loadTest(day: number) {
    return this.load(day, 'test')
  }

  async loadInput(day: number) {
    return this.load(day, 'input')
  }

  async load(day: number, filename: string) {
    const val = await firstValueFrom(this.http.get(`assets/inputs/day${day}/${filename}.txt`, {
      responseType: 'text'
    }))

    return val
  }


}
