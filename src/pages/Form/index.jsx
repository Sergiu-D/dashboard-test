import React, { useState, useContext, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
//Context
import { FormContext } from '../../context/FormContext';
// Components
import SelectInput from './SelectInput';
import ActionsLayout from './ActionsLayout';
import TabSearchInput from './TabSearchInput';
import ToggleSwitch from './ToggleSwitch';
import { actionsSetTemplate } from '../../templates';
// Values
import { actionsOptions, searchTabsOptions } from '../../inputValues';

const Form = () => {
  const {
    formData,
    setFormData,
    setInputValue,
    handleToggleRules,
    handleAddNewItem,
    getInputInitialValue,
  } = useContext(FormContext);

  return (
    <div>
      <Breadcrumb pageName="Form" />

      <div>
        <div className="flex flex-col gap-5">
          {formData.map((attribute, index) => {
            const path = [index, 'actions', 'actionsSet'];
            return (
              <div className="flex flex-col" key={[index]}>
                <div className="flex flex-col">
                  <div className="flex  justify-between">
                    <h3 className="flex-[1_1_0] text-2xl capitalize">
                      {attribute.attributeName}
                    </h3>
                    <div className="flex-[4_4_0]">
                      <ToggleSwitch
                        attribute={attribute}
                        firstLabel="Products"
                        secondLabel="Rules"
                        handleOnChange={() => handleToggleRules(index)}
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-5 bg-boxdark p-5">
                    <ActionsLayout
                      attribute={attribute}
                      areRulesSelected={attribute.areRulesSelected}
                      setFormData={setFormData}
                      indexSet={[index]}
                      objectPath={path}
                    />
                    {attribute.areRulesSelected && (
                      <button
                        onClick={() =>
                          handleAddNewItem(path, actionsSetTemplate)
                        }
                        className=" w-fit rounded py-1 px-3 my-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:bg-meta-8"
                      >
                        Add Action
                      </button>
                    )}
                    <div className="flex gap-7">
                      {attribute.areRulesSelected && (
                        <>
                          <p>Else: </p>

                          <SelectInput
                            value={attribute.actions.defaultAction.action}
                            options={actionsOptions}
                            onChange={(ev) =>
                              setInputValue(
                                ev,
                                [index, 'actions', 'defaultAction'],
                                'action',
                              )
                            }
                          />
                          <TabSearchInput
                            value={attribute.actions.defaultAction.field}
                            selectOptions={searchTabsOptions}
                            onChange={(ev) =>
                              setInputValue(
                                ev,
                                [index, 'actions', 'defaultAction'],
                                'field',
                              )
                            }
                          />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Form;
