import AppButtont from '@ui/AppButton';
import React, {FC} from 'react';
import {useFormContext} from 'react-hook-form';

interface SubmitBtnProps {
  title: string;
}

const SubmitBtn: FC<SubmitBtnProps> = ({title}) => {
  const {handleSubmit, formState} = useFormContext();

  return (
    <AppButtont
      onPress={() => {}}
      title={title}
      isLoading={formState.isSubmitting}
    />
  );
};

export default SubmitBtn;
