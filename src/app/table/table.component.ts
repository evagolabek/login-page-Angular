import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ReportDeviceDetailSoftware} from '../report-device-detail-software.model'
import { ReportDeviceDetailHardware } from '../report-device-detail-hardware.mode'
import {Item} from '../item.model'


const DATA: Item[] = [
  {name: 'Marta',description: 'Hydrogen', lastLogin: '18-09-2018', backup: true, freud: 1},
  {name: 'Eva',description: 'Helium', lastLogin: '08-09-2018', backup: false, freud: 2},
  {name: 'John',description: 'Lithium', lastLogin: '12-11-2018', backup: false, freud: 4},
  {name: 'Florian',description: 'Beryllium', lastLogin: '22-05-2018', backup: true, freud: 7},
  {name: 'Freud',description: 'Boron', lastLogin: '15-06-2018', backup: true, freud: 9},
];


// const DATA2: ReportDeviceDetailSoftware[] = [
//   {id: 1, deviceId: 301, name: 'plok'},
//   {id: 2, deviceId: 407, name: 'plik'}
// ];

const DATA3: ReportDeviceDetailHardware[] = [
  { id: 45, deviceId: 7, name: 'name', size: 100, freeSpace: 20, percentageUsed: 5, software: [{id: 2, deviceId: 4, name: 'plok'}, {id: 5, deviceId: 7, name: 'plikp'}] },
  { id: 45, deviceId: 7, name: 'name', size: 100, freeSpace: 20, percentageUsed: 5, software: [{id: 2, deviceId: 4, name: 'pwqe k'}, {id: 5, deviceId: 7, name: 'plfggd'}] }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<Item>;
  test: object;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(DATA3);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.displayedColumns = Object.keys(DATA3[0]);

    this.test = {
      name: 'eva',
      age: '22',
      sports: DATA3[0].software.map(i => ({sport: i.name}))
    }

    console.log(this.test)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}