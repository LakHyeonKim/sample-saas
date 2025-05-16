'use client';

import { Separator } from '@/components/ui/separator';
import { PIPELINE_STATUS } from '@/features/pipeline/constants/status';
import PipelineColumn from '@/features/pipeline/components/PipelineColumn';
import PipelineStats from '@/features/pipeline/components/PipelineStats';
import SearchBar from '@/features/pipeline/components/SearchBar';
import { Host, PipelineStats as PipelineStatsType } from '@/features/pipeline/types';

// 임시 데이터
const mockHosts: Host[] = [
  {
    id: '1',
    name: '나이스페이먼츠',
    updatedAt: new Date().toISOString(),
    meetingSchedule: '다음주 목요일 (23.11.01) 미팅 예정',
    hiringScale: 10,
    expectedDealSize: 100000000,
    manager: {
      id: '1',
      name: '최수민',
      imageUrl: 'https://picsum.photos/200',
    },
    mentor: {
      id: '1',
      name: '김주원',
      imageUrl: 'https://picsum.photos/200',
    },
    status: 'LEAD_ACQUISITION',
  },
];

const mockStats: PipelineStatsType[] = [
  {
    status: 'LEAD_ACQUISITION',
    count: 3,
    percentage: 25,
  },
  {
    status: 'TOPIC_MENTOR_MATCHING',
    count: 3,
    percentage: 25,
  },
  {
    status: 'SCHEDULE_WAITING',
    count: 3,
    percentage: 25,
  },
  {
    status: 'COMPLETED',
    count: 3,
    percentage: 25,
  },
  {
    status: 'CLOSED',
    count: 3,
    percentage: 25,
  },
  {
    status: 'CANCELLED',
    count: 3,
    percentage: 25,
  },
];

export default function PipelinePage() {
  const handleSearch = (query: string) => {
    console.log('Search:', query);
  };

  const handleAddClick = () => {
    console.log('Add clicked');
  };

  return (
    <div className="flex h-screen flex-col space-y-8 p-8">
      <div>
        <div className="text-sm text-gray-500">영업 리드 관리 / 주최사 파이프라인</div>
        <h1 className="text-4xl font-bold">주최사 파이프라인</h1>
      </div>

      <PipelineStats stats={mockStats} />

      <SearchBar onSearch={handleSearch} onAddClick={handleAddClick} />

      <Separator />

      <div className="flex flex-1 gap-4 overflow-x-auto pb-4">
        {Object.keys(PIPELINE_STATUS).map((status) => (
          <PipelineColumn
            key={status}
            status={status as keyof typeof PIPELINE_STATUS}
            hosts={mockHosts.filter((host) => host.status === status)}
            count={mockHosts.filter((host) => host.status === status).length}
            onAddClick={handleAddClick}
          />
        ))}
      </div>
    </div>
  );
} 