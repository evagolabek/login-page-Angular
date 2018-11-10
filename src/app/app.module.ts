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


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HeaderComponent,
    QuestionsComponent,
    TableComponent,
    SliderComponent
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
    MatDialogModule,
    MatDialogModule

  ],
  entryComponents: [
   QuestionsComponent,
   BlogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
