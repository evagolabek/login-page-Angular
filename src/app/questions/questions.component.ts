import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

//you need reference to the dialog to be able to close it, to get it you have to import MatDialogRef, the you are able to inject the MatDialogRef object to the constructor (declare the type MatDialogRef and bc its a type object so you need <QuestionsComponent> the you are able to use the close message)

//extending constructor definition with the second parameter using @inject and mat_dialog_data plus public keyword and data as the name of the property and its type = string 
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<QuestionsComponent>, @Inject(MAT_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
  }

  onCloseConfirm(){
    this.thisDialogRef.close('Confirm');
  }

  onCloseCancel(){
    this.thisDialogRef.close('Cancel');
  }

}
