import React from 'react';

export default function ToggleSwitch(props) {
  const { firstLabel, secondLabel, attribute, handleOnChange } = props;
  // const handleCheckboxChange = () => {
  //   attribute.areRulesSelected = !attribute.areRulesSelected;
  //   setFormData((prev) => [...prev]);
  // };

  return (
    <label className="themeSwitcherTwo h-fit shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-bodydark2 p-1">
      <input
        type="checkbox"
        className="sr-only"
        checked={attribute.areRulesSelected}
        onChange={handleOnChange}
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          !attribute.areRulesSelected
            ? 'text-white bg-boxdark'
            : 'text-body-color'
        }`}
      >
        {firstLabel}
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          attribute.areRulesSelected
            ? 'text-white bg-boxdark'
            : 'text-body-color'
        }`}
      >
        {secondLabel}
      </span>
    </label>
  );
}
