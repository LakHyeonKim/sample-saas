export const PIPELINE_STATUS = {
  LEAD_ACQUISITION: {
    id: 'LEAD_ACQUISITION',
    label: '리드 확보',
    color: '#3182F6',
  },
  TOPIC_MENTOR_MATCHING: {
    id: 'TOPIC_MENTOR_MATCHING',
    label: '주제 선정, 멘토 매칭',
    color: '#3182F6',
  },
  SCHEDULE_WAITING: {
    id: 'SCHEDULE_WAITING',
    label: '일정 협의, 대기',
    color: '#FE9800',
  },
  COMPLETED: {
    id: 'COMPLETED',
    label: '개최 완료',
    color: '#03B26C',
  },
  CLOSED: {
    id: 'CLOSED',
    label: '마감',
    color: '#888888',
  },
  CANCELLED: {
    id: 'CANCELLED',
    label: '취소',
    color: '#F04452',
  },
} as const;

export type PipelineStatusType = keyof typeof PIPELINE_STATUS; 