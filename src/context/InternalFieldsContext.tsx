import { useForm, FormProvider } from 'react-hook-form';
import { attributesMap } from '../schemas/InternalFieldsSchema';

export const InternalFieldsContextProvider = ({ children }: any): any => {
  const methods = useForm({
    defaultValues: {
      formData: attributesMap,
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
