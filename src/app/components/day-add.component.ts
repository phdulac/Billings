import { Component, Input } from '@angular/core';

import { Day } from '../classes/day';
import { Cycle } from '../classes/cycle';
import { Observation } from '../classes/observation';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'day-add',
  templateUrl: '../templates/day-add.template.html',
  styleUrls: ['../styles/day-add.component.css']
})
export class DayAddComponent {
  cycles: Cycle[];
  days: Day[];
  observations: Observation[];
  today;

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
  ) { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  addDay(data) {
    var newDay = new Day;
    newDay.date = data.value.date && data.value.date || this.today;
    newDay.observationId = data.value.observationId && data.value.observationId || null;
    newDay.description = data.value.description && data.value.description || null;
    newDay.cycleId = data.value.cycleId && data.value.cycleId || this.cycles[this.cycles.length - 1].id;
    console.log(newDay)
    this.days.push(newDay);
    this.dialogService.openSnackBar('Journée ajoutée', null)
  }
  getCycles(): void {
    this.dataService.getCycles().then(cycles => this.cycles = cycles);
  }
  getDays(): void {
    this.dataService.getDays().then(days => this.days = days);
  }
  getObservations(): void {
    this.dataService.getObservations().then(observations => this.observations = observations);
  }
  ngOnInit(): void {
    this.today = new Date();
    this.getCycles();
    this.getDays();
    this.getObservations();
  }
}