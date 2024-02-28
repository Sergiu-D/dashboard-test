import { memo, useContext } from 'react';
import SelectInput from './SelectInput';
import ToggleSwitch from './ToggleSwitch';

import Rule from './Rule';
import { ruleSetTemplate } from '../../templates';
// Context
import { FormContext } from '../../context/FormContext';

// Utils
import generateKey from '../../utils/generateKey';

const RulesSetLayout = memo((props) => {
  const { ruleSet, attributeName, objectPath } = props;
  const { handleAddNewItem } = useContext(FormContext);

  return (
    <>
      {ruleSet.map((rule, index) => {
        const path = [...objectPath, index];
        const indexSetGenerated = generateKey(path);
        if (!rule.rules.length) return;
        return (
          <div className="flex flex-col gap-7 " key={indexSetGenerated}>
            <div className="flex">
              <Rule
                rulesSet={rule}
                attributeName={attributeName}
                objectPath={path}
              />
            </div>
            <button
              onClick={() => handleAddNewItem(objectPath, ruleSetTemplate)}
              className=" w-fit h-fit rounded py-1 px-3 my-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:bg-primary"
            >
              Add AND / OR
            </button>
          </div>
        );
      })}
    </>
  );
});

export default RulesSetLayout;
