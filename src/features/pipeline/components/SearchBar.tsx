'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onAddClick: () => void;
}

export default function SearchBar({ onSearch, onAddClick }: SearchBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            className="w-[300px] pl-10"
            placeholder="검색어를 입력하세요"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>
      <Button onClick={onAddClick}>
        <Plus className="mr-2 h-4 w-4" />
        추가
      </Button>
    </div>
  );
} 