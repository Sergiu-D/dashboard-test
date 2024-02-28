// Components
import SelectInput from './SelectInput';
import RulesSet from './RulesSet';
import ComboSelect from './ComboSelect';
// Values
import { actionsOptions, searchTabsOptions } from '../../inputValues';
// Hooks
import { useFormContext, useFieldArray, useWatch } from 'react-hook-form';

import { actionsSetTemplate } from '../../schemas/InternalFieldsSchema';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';

export default function ActionsLayout(props) {
  const { prevPath } = props;

  const { register } = useFormContext();
  const { fields, append, remove, swap } = useFieldArray({
    name: `${prevPath}.actions.actionsSet`,
  });

  const areRulesSelected = useWatch({
    name: `${prevPath}.areRulesSelected`,
  });

  const selectedActionsSet = areRulesSelected ? fields : [fields[0]];
  const currentFieldsLength = fields.length;
  return (
    <div>
      {selectedActionsSet.map((action, index) => {
        const path = `${prevPath}.actions.actionsSet.${index}`;
        const isLastIndex = currentFieldsLength - 1 === index;

        return (
          <div
            className="flex flex-col gap-5 bg-stroke dark:bg-boxdark-2 p-4"
            key={action.id}
          >
            <div className="flex gap-7">
              <SelectInput
                register={{
                  ...register(`${path}.action`),
                }}
                options={actionsOptions}
              />
              <ComboSelect
                value={action.field}
                register={{
                  ...register(`${path}.field`),
                }}
                selectOptions={searchTabsOptions}
                prevPath={path}
              />
              {currentFieldsLength > 1 && areRulesSelected && (
                <div className="flex gap-5">
                  <button
                    onClick={() => remove(index)}
                    className="w-fit h-fit rounded py-1 px-3 text-xs font-mediu hover:opacity-90 hover:shadow-card text-white bg-danger"
                  >
                    <Trash2 />
                  </button>
                  <div className="flex gap-3">
                    {index !== 0 && (
                      <button
                        onClick={() => swap(index, index - 1)}
                        className="w-fit h-fit rounded py-1 px-3 text-xs font-mediu hover:opacity-90 hover:shadow-card text-white bg-secondary"
                      >
                        <ChevronUp />
                      </button>
                    )}
                    {!isLastIndex && (
                      <button
                        onClick={() => swap(index, index + 1)}
                        className="w-fit h-fit rounded py-1 px-3 text-xs font-mediu hover:opacity-90 hover:shadow-card text-white bg-secondary"
                      >
                        <ChevronDown />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div>
              {areRulesSelected && (
                <div className="flex flex-col gap-5 ml-8">
                  <RulesSet prevPath={path} />
                </div>
              )}
            </div>
          </div>
        );
      })}
      {areRulesSelected && (
        <button
          onClick={() => append(actionsSetTemplate)}
          className=" w-fit rounded py-1 px-3 my-3 text-xs font-medium hover:opacity-90 hover:shadow-card text-white bg-meta-8"
        >
          Add Action
        </button>
      )}
    </div>
  );
}
