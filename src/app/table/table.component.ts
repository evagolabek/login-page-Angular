import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ReportDeviceDetailSoftware} from '../report-device-detail-software.model'
import { ReportDeviceDetailHardware } from '../report-device-detail-hardware.mode'
import {Item} from '../item.model'


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() tableModel: TableModel<any>;

  displayedColumns: string[];
  // header: T
  dataSource: MatTableDataSource<Item>;
  test: object;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.displayedColumns = Object.keys(DATA3[0]);

    // this.test = {
    //   name: 'eva',
    //   age: '22',
    //   sports: DATA3[0].software.map(i => ({sport: i.name}))
    // }

    console.log(this.test)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

export interface TableModel<T> {
  displayedColumns: string [];
  header: T;
  data: T[];
}