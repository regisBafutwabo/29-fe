"use client";

import { Button } from "@/components/common/Button/Button";
import { Checkbox } from "@/components/common/Checkbox/Checkbox";
import { useCartStore } from "@/store/cartStore";

export const CartHeader = () => {
  const {
    items,
    getSelectedCount,
    selectAll,
    deselectAll,
    removeSelectedItems,
  } = useCartStore();

  const onSelectAll = (checked: boolean) => {
    if (checked) {
      selectAll();
    } else {
      deselectAll();
    }
  };

  const selectionCount = getSelectedCount();

  const removeSelected = () => {
    removeSelectedItems();
  };

  return (
    <div className="flex items-center justify-between  py-[13px]">
      <Checkbox
        label={`전체선택 (${selectionCount.selected}/${selectionCount.total})`}
        checked={selectionCount.selected === selectionCount.total}
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
