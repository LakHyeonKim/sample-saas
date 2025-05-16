'use client';

import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  {
    title: '영업 리드 관리',
    items: [
      {
        title: '주최사 파이프라인',
        href: '/pipeline',
      },
      {
        title: '멘토 파이프라인',
        href: '/mentor-pipeline',
      },
      {
        title: '대표 메일 수신 내역',
        href: '/mail-inbox',
      },
    ],
  },
  {
    title: '회원 관리',
    items: [
      {
        title: '대시보드',
        href: '/dashboard',
      },
      {
        title: '회원 내역',
        href: '/members',
      },
    ],
  },
  {
    title: '컨텐츠 관리',
    items: [
      {
        title: '딥다이브',
        href: '/deep-dive',
      },
      {
        title: '신청내역',
        href: '/applications',
      },
      {
        title: '후기',
        href: '/reviews',
      },
    ],
  },
  {
    title: 'C/S 관리',
    items: [
      {
        title: '전화 문의 내역',
        href: '/phone-inquiries',
      },
      {
        title: '채팅 문의 내역',
        href: '/chat-inquiries',
      },
    ],
  },
];

export default function MainSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-60 flex-col justify-between border-r bg-white px-2 py-6">
      <div className="space-y-6">
        {menuItems.map((section) => (
          <div key={section.title} className="space-y-2">
            <h2 className="px-4 text-base font-extrabold text-gray-900">
              {section.title}
            </h2>
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block rounded-lg px-6 py-2 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900',
                  pathname === item.href
                    ? 'bg-blue-50 font-bold text-blue-600'
                    : ''
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 text-sm text-gray-500">
        <LogOut className="h-4 w-4" />
        로그아웃
      </button>
    </div>
  );
} 