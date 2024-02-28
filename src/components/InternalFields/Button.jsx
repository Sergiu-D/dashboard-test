import React from 'react';

export default function Button({ label, isActive, handleOnClick, reverse }) {
  const isReversed = reverse ? isActive !== label : isActive === label;
  return (
    <button
      onClick={handleOnClick}
      className={`w-fit h-fit rounded py-1 px-3 my-3 text-xs font-medium hover:opacity-90 text-white dark:text-white  bg-primary opacity-50 ${
        isReversed &&
        'hover:bg-white hover:shadow-card hover:opacity-90 !text-white !bg-primary !opacity-100'
      }`}
    >
      {label}
    </button>
  );
}
