import React, { createContext, useState } from 'react';
import { attributesMap } from '../templates';
import { useForm } from 'react-hook-form';

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState(attributesMap);
  // const methods = useForm();

  const handleToggleRules = (path) => {
    setFormData((prev) => {
      const newState = JSON.parse(JSON.stringify(prev)); // Deep copy

      newState[path].areRulesSelected = !newState[path].areRulesSelected;
      return newState;
    });
  };

  const handleAddNewItem = (arrayPath, template) => {
    setFormData((prev) => pushItem(prev, arrayPath, template));
  };

  const setInputValue = (ev, arrayPath, key) => {
    const elementType = ev.target.tagName;
    let value = ev.target.value;

    if (elementType === 'LI') value = ev.target.dataset.value;
    setFormData((prev) => setValue(prev, arrayPath, key, value));
  };

  const handleRemoveRule = (arrayPath) => {
    setFormData((prev) => removeItem(prev, arrayPath));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        handleToggleRules,
        handleAddNewItem,
        handleRemoveRule,
        setInputValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

function pushItem(obj, pathArray, newItem) {
  const newState = JSON.parse(JSON.stringify(obj)); // Deep copy

  const parentArray = getParentArray(newState, pathArray);
  parentArray.push(newItem);
  return newState;
}

function setValue(obj, pathArray, key, value) {
  const newState = JSON.parse(JSON.stringify(obj)); // Deep copy

  const parentArray = getParentArray(newState, pathArray);
  parentArray[key] = value;
  return newState;
}

function removeItem(obj, pathArray) {
  const newState = JSON.parse(JSON.stringify(obj)); // Deep copy
  const parentArray = pathArray
    .slice(0, -1)
    .reduce((acc, key) => acc[key], newState);
  const arrayIndex = pathArray[pathArray.length - 1];

  parentArray.splice(arrayIndex, 1);

  return newState;
}

const getParentArray = (obj, pathArray) => {
  const parentArray = pathArray
    .slice(0, -1)
    .reduce((acc, key) => acc[key], obj);
  const arrayIndex = pathArray[pathArray.length - 1];
  return parentArray[arrayIndex];
};

export { FormContext, FormContextProvider };
