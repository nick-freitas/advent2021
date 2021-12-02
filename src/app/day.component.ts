import { Component, Inject, OnInit } from '@angular/core';
import { InputParserService } from './input-parser.service';

@Component({ template: '' })
export abstract class BaseDayComponent implements OnInit {
    day: number = 0
    public input: any[]
    public answer1: any
    public answer2: any
    public testMode: boolean
    public isCollapsed: any


    constructor(@Inject('') day: number, public inputParser: InputParserService) {
        this.day = day;
        this.inputParser = inputParser
        this.input = [];
        this.isCollapsed = false
        this.answer1 = this.answer2 = "?"
        this.testMode = true
    }

    async ngOnInit(): Promise<void> {
        if (this.testMode) await this.runTest()
        else await this.runInput()
    }

    async runTest(): Promise<void> {
        this.input = await this.inputParser.loadTest(this.day)

        this.partOne();
        this.partTwo();
    }

    async runInput(): Promise<void> {
        this.input = await this.inputParser.loadInput(this.day)

        this.partOne();
        this.partTwo();
    }

    abstract partOne(): any

    abstract partTwo(): any
}
