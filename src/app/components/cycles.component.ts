import { Component, OnInit } from '@angular/core';

import { Day } from '../classes/day';
import { Cycle } from '../classes/cycle';
import { Observation } from '../classes/observation';
import { DataService } from '../services/data.service';

import { SearchPipe } from '../pipes/search.pipe';

@Component({
  selector: 'cycles',
  templateUrl: '../templates/cycles.template.html',
  styleUrls: ['../styles/cycles.component.css'],
  providers: [DataService]
})
export class CyclesComponent implements OnInit {
  title = 'Billings';
  cycles: Cycle[];
  days: Day[];
  observations: Observation[];

  constructor(
    private dataService: DataService
    ) {}

  getCycles(): void {
    this.dataService.getCycles().then(cycles => this.cycles = cycles);
  }
  getDays(): void {
    this.dataService.getDays().then(days => this.days = days);
  }
  getDaysByCycle(cycleId): void {
    this.dataService.getDays().then(days => {return days.filter(day => day.cycleId === cycleId)})
  }
  getObservations(): void {
    this.dataService.getObservations().then(observations => this.observations = observations);
  }
  ngOnInit(): void {
    this.getCycles();
    this.getDays();
    this.getObservations();
  }
}