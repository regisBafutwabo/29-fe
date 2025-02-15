"use client";
import { useState } from 'react';

import { Checkbox } from '../common/Checkbox/Checkbox';
import { Counter } from '../common/Counter/Counter';
import Select from '../common/Select/Select';

export const InteractiveComponent = () => {
  const [size, setSize] = useState("");
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold text-center">Interactive Component</h3>
      <div className="flex flex-col gap-2">
        <Select
          label="사이즈"
          required
          placeholder="선택"
          error="에러 메시지"
          options={[
            { value: "S", label: "Label" },
            { value: "M", label: "M", disabled: true },
            { value: "L", label: "L" },
          ]}
          value={size}
          onChange={(value: string) => {
            setSize(value);
          }}
        />
        <Checkbox
          label="checkbox"
          checked={checked}
          onChange={(value: boolean) => {
            setChecked(value);
          }}
        />
        <Counter value={count} onChange={(value: number) => setCount(value)} />
      </div>
    </div>
  );
};
