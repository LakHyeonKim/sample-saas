import { PipelineStatusType } from '../constants/status';

export interface Host {
  id: string;
  name: string;
  updatedAt: string;
  meetingSchedule: string;
  hiringScale: number;
  expectedDealSize: number;
  manager: {
    id: string;
    name: string;
    imageUrl: string;
  };
  mentor?: {
    id: string;
    name: string;
    imageUrl: string;
  };
  status: PipelineStatusType;
}

export interface PipelineStats {
  status: PipelineStatusType;
  count: number;
  percentage: number;
} 