import {ReportDeviceDetailSoftware} from './report-device-detail-software.model';

export interface ReportDetailDevice {
  id: number;
  reportId: number;
  name: string;
  deviceId: string;
  operatingSystem: string;
  ipAddress: string;
  software: ReportDeviceDetailSoftware[];
}