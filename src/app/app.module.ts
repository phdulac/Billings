import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import { App, NavController } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InlineEditorModule} from '@qontu/ngx-inline-editor';
import { NgxSvgIconModule } from 'ngx-svg-icon'
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdFormFieldModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './components/app.component';
import { DayAddComponent } from './components/day-add.component';
import { CyclesComponent } from './components/cycles.component';
import { SettingsComponent } from './components/settings.component';

import { DataService } from './services/data.service';
import { DialogService } from './services/dialog.service';

import { SearchFilterPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdFormFieldModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OnsenModule,
    InlineEditorModule,
    NgxSvgIconModule.forRoot({ basePath: '/images' },
    RouterModule.forRoot([
      {
        path: 'cycles',
        component: CyclesComponent
      },
      {
        path: 'day-add',
        component: DayAddComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DayAddComponent,
    CyclesComponent,
    SettingsComponent,
    SearchFilterPipe
  ],
  providers: [
    DataService,
    DialogService
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }