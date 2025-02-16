import React from 'react';

export default function ProductLoading(){
  return (
    <div className="animate-pulse">
      <div className="h-[425px] bg-gray-300 rounded-md mb-4"></div> {/* Placeholder for ImageCarousel */}
      <div className="h-6 bg-gray-300 rounded-md mb-4"></div> {/* Placeholder for ProductHeader */}
      <div className="h-8 bg-gray-300 rounded-md mb-8"></div> {/* Placeholder for ProductInfo */}
      <div className="h- bg-gray-300 rounded-md mb-8"></div> {/* Placeholder for SelectionOptions */}
    </div>
  );
};
