import { useContext } from 'react';
// Components
import SelectInput from './SelectInput';
import generateKey from '../../utils/generateKey';
import TabSearchInput from './TabSearchInput';
// Context
import { FormContext } from '../../context/FormContext';

// Values
import { ruleOperator, searchTabsOptions } from '../../inputValues';
import { ruleTemplate } from '../../templates';

export default function RulesLayout(props) {
  const { rulesSet, objectPath } = props;
  const { handleAddNewItem, handleRemoveRule, setInputValue } =
    useContext(FormContext);

  return (
    <div className="w-full flex flex-col bg-boxdark p-4 gap-5">
      {rulesSet.rules.map((rule, index) => {
        const path = [...objectPath];

        return (
          <div className="flex gap-5" key={generateKey([...path, index])}>
            <div className="w-full flex gap-5">
              <TabSearchInput
                value={rule.leftOperand}
                selectOptions={searchTabsOptions}
                onChange={(ev) =>
                  setInputValue(ev, [...path, 'rules', index], 'leftOperand')
                }
              />
              <SelectInput
                value={rule.operator}
                options={ruleOperator}
                onChange={(ev) =>
                  setInputValue(ev, [...path, 'rules', index], 'operator')
                }
              />
              <TabSearchInput
                value={rule.rightOperand}
                selectOptions={searchTabsOptions}
                onChange={(ev) =>
                  setInputValue(ev, [...path, 'rules', index], 'rightOperand')
                }
              />
            </div>
            <div className="flex gap-5 items-center h-fit">
              <button
                onClick={() =>
                  handleAddNewItem([...path, 'rules'], ruleTemplate)
                }
                className=" w-max rounded py-1 px-3 my-2 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:bg-primary"
              >
                Add AND / OR
              </button>
              {rulesSet.rules.length > 1 && (
                <button
                  onClick={() =>
                    handleRemoveRule([...objectPath, 'rules', index])
                  }
                  className="w-fit h-fit rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:bg-danger"
                >
                  X
                </button>
              )}
              {/* <ToggleSwitch /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
