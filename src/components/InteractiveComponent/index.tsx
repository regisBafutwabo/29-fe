"use client";
import { useState } from 'react';

import { Checkbox } from '../common/Checkbox/Checkbox';
import { Counter } from '../common/Counter/Counter';
import { ProductImage } from '../common/Image/Image';
import Select from '../common/Select/Select';
import { ImageCarousel } from '../product/Carousel/Carousel';

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
        <ProductImage
          src="https://img.29cm.co.kr/item/202308/11ee4315d967d9ff8a69c7b418cbe14c.jpeg"
          alt="[선물포장] 티머그 & 논카페인 잎차 세트"
        />
        <ImageCarousel
          images={[
            "https://images.pexels.com/photos/15352967/pexels-photo-15352967/free-photo-of-a-lamp-with-circles-on-it-is-sitting-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/16716951/pexels-photo-16716951/free-photo-of-fireworks-over-the-water-with-people-watching.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/7339653/pexels-photo-7339653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          ]}
          alt="Image Carousel"
        />
      </div>
    </div>
  );
};
