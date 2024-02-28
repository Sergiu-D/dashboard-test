import Breadcrumb from '../../components/Breadcrumb';
// Components
import SelectInput from './SelectInput';
import ActionsLayout from './ActionsLayout';
import ComboSelect from './ComboSelect';
import Switch from './Switch';
// Values
import { actionsOptions, searchTabsOptions } from '../../schemas/InputSchema';

import { useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const InternalFields = ({ formMethods }) => {
  const { register, watch, handleSubmit, control, setValue } = formMethods;

  const { fields } = useFieldArray({
    name: `formData`,
    control,
  });

  const handleToggleRules = (index, value) => {
    setValue(`formData.${index}.areRulesSelected`, !value);
  };
  const handleSubmitForm = (data) => {
    console.log('Form is submited');
    console.log(data);
  };

  return (
    <div>
      <Breadcrumb pageName="Form" />

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        {fields.map((attribute, index) => {
          const path = `formData.${index}`;

          const areRulesSelected = watch(`formData.${index}.areRulesSelected`);
          return (
            <div className="flex flex-col" key={attribute.id}>
              <div className="flex flex-col">
                <div className="flex  justify-between">
                  <h3 className="flex-[1_1_0] text-2xl capitalize">
                    {attribute.attributeName}
                  </h3>
                  <div className="flex-[4_4_0]">
                    <Switch
                      register={{
                        ...register(`formData.${index}.areRulesSelected`),
                      }}
                      firstLabel="Products"
                      secondLabel="Rules"
                      handleOnChange={() =>
                        handleToggleRules(index, areRulesSelected)
                      }
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-5 dark:bg-boxdark p-5">
                  <ActionsLayout prevPath={path} />

                  <div className="flex gap-7">
                    {areRulesSelected && (
                      <>
                        <p>Else: </p>

                        <SelectInput
                          register={{
                            ...register(`${path}.actions.defaultValues.action`),
                          }}
                          options={actionsOptions}
                        />
                        <ComboSelect
                          value={attribute.actions.defaultAction.field}
                          register={{
                            ...register(`${path}.actions.defaultAction.field`),
                          }}
                          selectOptions={searchTabsOptions}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <input
          type="submit"
          className=" w-fit rounded py-1 px-3 my-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:bg-meta-8"
        />
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default InternalFields;
