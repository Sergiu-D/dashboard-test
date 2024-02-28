import { useState } from 'react';

import Rule from './Rule';
import Button from './Button';
import { ruleSetTemplate } from '../../schemas/InternalFieldsSchema';
// Hooks
import { useFormContext, useFieldArray, useWatch } from 'react-hook-form';

export default function RulesSetLayout(props) {
  const { prevPath } = props;
  const [operandStateValue, setOperandStateValue] = useState('OR');

  const { setValue } = useFormContext();

  const { fields, insert, remove } = useFieldArray({
    name: `${prevPath}.ruleSet`,
  });

  const handleOperandChange = (value) => {
    fields.forEach(() => {
      const insertValue = value === 'OR' ? 'AND' : 'OR';
      setValue(`${prevPath}.operator`, insertValue);
    });
    setValue(`${prevPath}.operator`, value);
    setOperandStateValue(value);
  };

  const currentFieldsLength = fields.length;
  return (
    <>
      {fields.map((rule, index) => {
        const path = `${prevPath}.ruleSet.${index}`;
        if (!rule.rules.length) return;

        const isLastIndex = currentFieldsLength - 1 === index;
        return (
          <div className="flex flex-col gap-7 " key={rule.id}>
            <div className="flex">
              <Rule
                prevPath={path}
                parentIndex={index}
                parentLength={currentFieldsLength}
                removeParent={remove}
                handleOperandChange={handleOperandChange}
                parentOperatorValue={operandStateValue}
              />
            </div>
            {!isLastIndex ? (
              <div className="flex gap-3">
                <Button
                  label="OR"
                  handleOnClick={() => handleOperandChange('OR')}
                  isActive={operandStateValue}
                  reverse={false}
                />
                <Button
                  label="AND"
                  handleOnClick={() => handleOperandChange('AND')}
                  isActive={operandStateValue}
                  reverse={false}
                />
              </div>
            ) : (
              <button
                onClick={() => insert(index + 1, ruleSetTemplate)}
                className=" w-fit h-fit rounded py-1 px-3 my-3 text-xs font-medium hover:opacity-9 hover:shadow-card text-white bg-primary"
              >
                Add Rule Set
              </button>
            )}
          </div>
        );
      })}
    </>
  );
}
