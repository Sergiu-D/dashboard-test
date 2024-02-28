import { useContext } from 'react';
import InternalFields from '../../components/InternalFields';
import { FormContext } from '../../context/FormContext';
import { attributesMap } from '../../schemas/InternalFieldsSchema';

import { useForm, FormProvider, useFormContext } from 'react-hook-form';
// Context
// @ts-ignore
import { FormContextProvider } from '../../context/FormContext';

import { InternalFieldsContextProvider } from '../../context/InternalFieldsContext';

const Form = () => {
  const formContext = useContext(FormContext);
  const methods = useFormContext();

  // const methods = useForm({
  //   defaultValues: {
  //     formData: attributesMap,
  //   },
  // });

  // const { register, watch, handleSubmit } = useForm();
  // const watchFormData = watch();
  // console.log('🚀 ~ Form ~ watchFormData:', watchFormData);

  // console.log('🚀 ~ Form ~ fields:', fields);
  // const handleSubmitForm = (data) => {
  //   console.log('Form is submited');
  //   console.log(data);
  // };
  // const handleToggle = (string) => {
  //   setValue(string, (prevValue) => !prevValue);
  // };
  return (
    <FormContextProvider>
      <InternalFields formMethods={methods} formContext={formContext} />;
    </FormContextProvider>
  );
  // </div>
};

export default Form;
