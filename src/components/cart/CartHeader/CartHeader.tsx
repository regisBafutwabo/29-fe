"use client";

import {
  useEffect,
  useState,
} from 'react';

import { Button } from '@/components/common/Button/Button';
import { Checkbox } from '@/components/common/Checkbox/Checkbox';
import { useCartStore } from '@/store/cartStore';

export const CartHeader = () => {
  const {
    items,
    getSelectedCount,
    selectAll,
    deselectAll,
    removeSelectedItems,
  } = useCartStore();
  const [mounted, setMounted] = useState(false);

  const onSelectAll = (checked: boolean) => {
    if (checked) {
      selectAll();
    } else {
      deselectAll();
    }
  };

  const removeSelected = () => {
    removeSelectedItems();
  };

  const selectionCount = getSelectedCount();

  useEffect(() => {
    setMounted(true);
  }, []);

  // To fix Hydration issues(can be better)
  if (!mounted) return null;

  return (
    <div className="fixed w-full pr-8 z-10 bg-background flex items-center justify-between py-[13px]">
      <Checkbox
        label={`전체선택 (${selectionCount.selected}/${selectionCount.total})`}
        checked={
          selectionCount.total > 0 &&
          selectionCount.selected === selectionCount.total
        }
        onChange={onSelectAll}
      />
      <Button
        variant="tertiary"
        className="h-7 w-[60px] text-sm"
        onClick={removeSelected}
      >
        선택삭제
      </Button>
    </div>
  );
};
