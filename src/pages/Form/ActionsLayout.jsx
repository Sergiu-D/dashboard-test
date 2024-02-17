import { useContext } from 'react';

// Components
import SelectInput from './SelectInput';
import RulesSet from './RulesSet';
import TabSearchInput from './TabSearchInput';
// Context
import { FormContext } from '../../context/FormContext';
// Values
import { actionsOptions, searchTabsOptions } from '../../inputValues';
// Utils
import generateKey from '../../utils/generateKey';

export default function ActionsLayout(props) {
  const { attribute, objectPath } = props;
  const { formData, setInputValue } = useContext(FormContext);

  const areRulesSelected = formData[objectPath[0]].areRulesSelected;

  const selectedActionsSet = areRulesSelected
    ? attribute.actions.actionsSet
    : [attribute.actions.actionsSet[0]];

  return (
    <>
      {selectedActionsSet.map((action, index) => {
        const path = [...objectPath, index];
        return (
          <div
            className="flex flex-col gap-5 bg-boxdark-2 p-4"
            key={generateKey(path)}
          >
            <div className="flex gap-7">
              <SelectInput
                value={action.action}
                options={actionsOptions}
                text={'Action Name'}
                onChange={(ev) => setInputValue(ev, path, 'action')}
              />
              <TabSearchInput
                value={action.field}
                selectOptions={searchTabsOptions}
                onChange={(ev) => setInputValue(ev, path, 'field')}
              />
            </div>
            <div>
              {areRulesSelected && (
                <div className="flex flex-col gap-5 ml-8">
                  <RulesSet
                    ruleSet={action.ruleSet}
                    attributeName={attribute.attributeName}
                    objectPath={[...path, 'ruleSet']}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
