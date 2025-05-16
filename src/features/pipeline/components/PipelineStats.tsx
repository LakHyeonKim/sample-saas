'use client';

import { Card } from '@/components/ui/card';
import { PIPELINE_STATUS } from '../constants/status';
import { PipelineStats as PipelineStatsType } from '../types';

interface PipelineStatsProps {
  stats: PipelineStatsType[];
}

export default function PipelineStats({ stats }: PipelineStatsProps) {
  return (
    <div className="flex gap-3">
      {stats.map((stat) => {
        const status = PIPELINE_STATUS[stat.status];
        return (
          <Card
            key={stat.status}
            className="flex w-[180px] flex-col gap-4 border p-3"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded"
                style={{ backgroundColor: status.color }}
              />
              <span className="text-sm text-gray-600">{status.label}</span>
            </div>
            <div className="flex items-end justify-end gap-1">
              <span className="text-sm text-gray-400">{stat.percentage}%</span>
              <span className="text-xl font-bold">{stat.count}건</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
} 