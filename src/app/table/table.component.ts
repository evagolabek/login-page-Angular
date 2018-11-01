import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface Item {
  name: string;
  description: string;
  lastLogin: string;
  backup: boolean;
}

const ITEM_DATA: Item[] = [
  {name: 'Marta',description: 'Hydrogen', lastLogin: '18-09-2018', backup: true},
  {name: 'Eva',description: 'Helium', lastLogin: '08-09-2018', backup: false},
  {name: 'John',description: 'Lithium', lastLogin: '12-11-2018', backup: false},
  {name: 'Florian',description: 'Beryllium', lastLogin: '22-05-2018', backup: true},
  {name: 'Freud',description: 'Boron', lastLogin: '15-06-2018', backup: true},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'lastLogin', 'backup'];
  dataSource: MatTableDataSource<Item>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ITEM_DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

