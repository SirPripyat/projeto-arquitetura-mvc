'use client';

import TextField from '@/components/text-field/text-field.component';
import { Button } from '@/components/button';
import { ButtonHierarchy } from '@/enum/button-hierarchy.enum';
import React from 'react';
import useLoginUserForm from '@/app/(public)/login/components/use-login-user-form.hook';
import { useRouter } from 'next/navigation';

export default function LoginUserForm() {
  const { loginUserInputsModel, submitForm } = useLoginUserForm();

  const { push } = useRouter();

  return (
    <form className="flex flex-col gap-8" onSubmit={submitForm}>
      {loginUserInputsModel.map(({ ...fields }, index) => (
        <TextField key={index} {...fields} />
      ))}

      <Button.Wrapper
        type={'submit'}
        hierarchy={ButtonHierarchy.Filled}
        onClick={() => push('/')}
      >
        Login
      </Button.Wrapper>
    </form>
  );
}
