import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { QuestionsComponent } from './questions/questions.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSortModule, MatCheckboxModule, MatSidenavModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { SliderComponent } from './slider/slider.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import {MatCardModule} from '@angular/material/card';
import { TableContainerComponent } from './table-container/table-container.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    QuestionsComponent,
    TableComponent,
    SliderComponent,
    DialogDemoComponent,
    TableContainerComponent,
    TextDisplayComponent,
    MyDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // required to display the Material table:
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,

    //dialog-modal
    MatCardModule,
    MatDialogModule 

  ],
  entryComponents: [
   QuestionsComponent,
   MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
