import { Injectable } from '@angular/core';
import {MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';


@Injectable()
export class DialogService {
  constructor(public snackBar: MdSnackBar, public dialog: MdDialog) {}
 
 openDialog(component): void {
    let dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 20000,
    });
  }
}

