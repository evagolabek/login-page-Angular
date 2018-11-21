import { Component, OnInit } from '@angular/core';
import { TableComponent, TableModel } from '../table/table.component';
import { ReportDetailDevice } from '../report-detail-device.model';


@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.css']
})
export class TableContainerComponent implements OnInit {
  dataTable: TableModel<any>;

  constructor() { }

  ngOnInit() {
    const rawData: ReportDetailDevice[] = [
     {
      id: 1,
      reportId: 7890,
      name: 'some-name',
      deviceId: 'ah-908-o88-y',
      operatingSystem: 'OS',
      ipAddress: '123-89-09',
      software: [{id: 45, deviceId: 7890, name:'name1'}, {id: 12, deviceId: 3421, name:'name2'}]
     }
    ]

    this.dataTable = {
      displayedColumns: [ "name", "deviceId", "operatingSystem"],
      header : {
        name: "Name",
        deviceId: "Device Id",
        operatingSystem: "Operating System"
      },
      data: rawData.map((x) => {
        return {
          name: x.name,
          deviceId: x.deviceId,
          operatingSystem: x.operatingSystem
        }
      })
    }
  }

}
