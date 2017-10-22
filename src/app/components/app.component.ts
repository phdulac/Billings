import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { DialogService } from '../services/dialog.service';
import { SettingsComponent } from '../components/settings.component';

@Component({
  selector: 'my-app',
  templateUrl: '../templates/app.template.html',
  styleUrls: ['../styles/app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(
    private dialogService: DialogService
  ) { }

  openDialog() {
    this.dialogService.openDialog(SettingsComponent);
  }
}