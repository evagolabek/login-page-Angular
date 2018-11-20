import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { QuestionsComponent } from '../questions/questions.component';

//example of syntax for injecting the service into a class is done by injecting in the constructor as a parameter using the 'public' keyword and the class member dialog should be of type MatDialog, now you are able to access all the instance of Matdialog using the class member 

//open service message is used to open the dialog, need to pass another component

//data is an example of passing custom property

//dialogRef is the reference which is returned to you and gives us access to the dialog, subscribe 
@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(QuestionsComponent, {
      width: '600px',
      data: 'XXXX This is my text XXXX',
    });
  

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed ${result}');
      this.dialogResult = result
    })

  }

}
