
import { Component, Input } from '@angular/core';

import { Observation } from '../classes/observation';
import { DataService } from '../services/data.service';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'settings',
  templateUrl: '../templates/settings.template.html',
  styleUrls: ['../styles/settings.component.css']
})
export class SettingsComponent {
  observations: Observation[];

  constructor(
    private dataService: DataService,
    private dialogService: DialogService
  ) { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  addObservation(data) {
    var newObservation = new Observation;
    newObservation.name = data.value.name;
    newObservation.color = data.value.color;
    this.observations.push(newObservation);
    this.dialogService.openSnackBar('Observation ajoutée', null)
  }
  saveEditable(value) {
    //call to http service
    console.log('http.service: ' + value);
  }
  getObservations(): void {
    this.dataService.getObservations().then(observations => this.observations = observations);
  }
  ngOnInit(): void {
    this.getObservations();
  }
}