import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { TableComponent } from '../table/table.component'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, AfterViewInit {

  events: string[] = [];
  opened: boolean;
  shouldRun = true;

  @ViewChild(TableComponent) tableRef: TableComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.tableRef);
  }

  closeSlider() {
    this.opened = false;
  }

  openSlider() {
    this.opened = true;
  }

}
