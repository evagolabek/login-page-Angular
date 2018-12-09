import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-anything',
  templateUrl: './anything.component.html',
  styleUrls: ['./anything.component.css']
})
export class AnythingComponent implements OnInit {

  constructor(
    public thisDialogRef: MatDialogRef<AnythingComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}