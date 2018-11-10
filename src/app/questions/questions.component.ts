import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

//you need reference to the dialog to be able to close it, to get it you have to import MatDialogRef, the you are able to inject the mddialogref object to the constructor (declare the type MatDialogRef and bc its a type object so you need <QuestionsComponent> the you are able to use the close message)
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<QuestionsComponent> ) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
