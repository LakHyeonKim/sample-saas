'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Host } from '../types';

interface HostCardProps {
  host: Host;
}

export default function HostCard({ host }: HostCardProps) {
  const {
    name,
    updatedAt,
    meetingSchedule,
    hiringScale,
    expectedDealSize,
    manager,
    mentor,
  } = host;

  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between py-4">
        <h3 className="text-base font-bold">{name}</h3>
        <span className="text-xs text-gray-500">
          {formatDistanceToNow(new Date(updatedAt), { locale: ko, addSuffix: true })}
        </span>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-700">{meetingSchedule}</p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">채용 규모</span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-600">{hiringScale}명</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">예상 거래 규모</span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-600">
                {expectedDealSize.toLocaleString()} 원
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">담당자</span>
            <div className="flex items-center gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage src={manager.imageUrl} />
                <AvatarFallback>{manager.name[0]}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-600">{manager.name}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400">매칭된 멘토</span>
            <div className="flex items-center gap-2">
              {mentor ? (
                <>
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={mentor.imageUrl} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-gray-600">{mentor.name}</span>
                </>
              ) : (
                <span className="text-xs text-gray-600">-</span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 