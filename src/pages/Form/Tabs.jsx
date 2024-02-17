import React from 'react';

export default function Tabs({ setTabs }) {
  const handleChange = (value) => setTabs(value);
  return (
    <div className="flex w-full max-w-45 justify-end">
      <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
        <button
          className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
          onClick={() => handleChange('all')}
        >
          All products
        </button>
        <button
          className="rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark"
          onClick={() => handleChange('if')}
        >
          Only If
        </button>
      </div>
    </div>
  );
}
