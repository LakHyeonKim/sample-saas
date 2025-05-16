'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import { PIPELINE_STATUS } from '../constants/status';
import { Host } from '../types';
import HostCard from './HostCard';

interface PipelineColumnProps {
  status: keyof typeof PIPELINE_STATUS;
  hosts: Host[];
  count: number;
  onAddClick?: () => void;
}

export default function PipelineColumn({
  status,
  hosts,
  count,
  onAddClick,
}: PipelineColumnProps) {
  const statusInfo = PIPELINE_STATUS[status];

  return (
    <div className="flex h-full w-[320px] flex-col space-y-4">
      <Card className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Badge
            variant="secondary"
            style={{ backgroundColor: statusInfo.color, color: 'white' }}
          >
            {statusInfo.label}
          </Badge>
        </div>
        <span className="text-sm text-gray-500">{count}</span>
      </Card>

      <div className="flex flex-1 flex-col space-y-4 overflow-y-auto">
        {hosts.map((host) => (
          <HostCard key={host.id} host={host} />
        ))}
      </div>

      {onAddClick && (
        <Button
          variant="outline"
          className="w-full border-dashed text-gray-400"
          onClick={onAddClick}
        >
          <Plus className="mr-2 h-4 w-4" />
          추가하기
        </Button>
      )}
    </div>
  );
} 