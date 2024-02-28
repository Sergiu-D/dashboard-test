import React, { useState, useEffect } from 'react';
import { useWatch } from 'react-hook-form';

export default function Switch(props) {
  const { register, firstLabel, secondLabel, handleOnChange } = props;

  const { name } = register;

  const valueState = useWatch({ name });

  const [stateValue, setStateValue] = useState();
  useEffect(() => {
    setStateValue(valueState);
  }, [valueState]);

  return (
    <label className="themeSwitcherTwo h-fit shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-stroke dark:text-boxdark p-1">
      <input
        {...register}
        type="checkbox"
        className="sr-only"
        onChange={handleOnChange}
      />
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          !stateValue ? 'text-white bg-boxdark' : 'text-body-color'
        }`}
      >
        {firstLabel}
      </span>
      <span
        className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
          stateValue ? 'text-white bg-boxdark' : 'text-body-color'
        }`}
      >
        {secondLabel}
      </span>
    </label>
  );
}
