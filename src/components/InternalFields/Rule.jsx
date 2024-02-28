// Components
import SelectInput from './SelectInput';
import ComboSelect from './ComboSelect';
import Button from './Button';
// Values
import { ruleOperator, searchTabsOptions } from '../../inputValues';
import { ruleTemplate } from '../../templates';
// Hooks
import { useFormContext, useFieldArray } from 'react-hook-form';
import { Trash2 } from 'lucide-react';

export default function Rule(props) {
  const {
    prevPath,
    parentLength,
    removeParent,
    parentIndex,
    handleOperandChange,
    parentOperatorValue,
  } = props;

  const { register } = useFormContext();

  const { fields, insert, remove } = useFieldArray({
    name: `${prevPath}.rules`,
  });

  const currentFieldsLength = fields.length;
  const handleRemoveRule = (
    parentLength,
    currentFieldsLength,
    parentIndex,
    currentIndex,
  ) => {
    if (currentFieldsLength >= 2) return remove(currentIndex);
    if (parentLength >= 1) return removeParent(parentIndex);
  };

  return (
    <div className="w-full flex flex-col bg-gray dark:bg-boxdark p-4 gap-5">
      {fields.map((rule, index) => {
        const path = `${prevPath}.rules.${index}`;
        const isLastIndex = currentFieldsLength - 1 === index;

        return (
          <div className="flex gap-5" key={rule.id}>
            <div className="w-full flex gap-5">
              <ComboSelect
                value={rule.rightOperand}
                register={{
                  ...register(`${path}.rightOperand`),
                }}
                selectOptions={searchTabsOptions}
                prevPath={path}
              />
              <SelectInput
                register={{
                  ...register(`${path}.operand`),
                }}
                options={ruleOperator}
              />
              <ComboSelect
                value={rule.leftOperand}
                register={{
                  ...register(`${path}.leftOperand`),
                }}
                selectOptions={searchTabsOptions}
                prevPath={path}
              />
            </div>
            <div className="flex gap-5 items-center h-fit">
              {!isLastIndex ? (
                <div className="flex gap-3">
                  <Button
                    label="OR"
                    handleOnClick={() => handleOperandChange('AND')}
                    isActive={parentOperatorValue}
                    reverse={true}
                  />
                  <Button
                    label="AND"
                    handleOnClick={() => handleOperandChange('OR')}
                    isActive={parentOperatorValue}
                    reverse={true}
                  />
                </div>
              ) : (
                <button
                  onClick={() => insert(index + 1, ruleTemplate)}
                  className=" w-max rounded py-1 px-3 my-2 text-xs font-medium  hover:opacity-90 hover:shadow-card text-white bg-primary"
                >
                  Add Rule
                </button>
              )}
              {(fields.length > 1 || parentLength > 1) && (
                <button
                  onClick={() =>
                    handleRemoveRule(
                      parentLength,
                      currentFieldsLength,
                      parentIndex,
                      index,
                    )
                  }
                  className="w-fit h-fit rounded py-1 px-3 text-xs font-medium hover:opacity-90 hover:shadow-card text-white bg-danger"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
