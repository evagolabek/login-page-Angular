import {ReportDeviceDetailSoftware} from './report-device-detail-software.model'

export interface ReportDeviceDetailHardware {
  id: number;
  deviceId: number;
  name: string;
  size: number;
  freeSpace: number;
  percentageUsed: number;
  software: ReportDeviceDetailSoftware[];
}